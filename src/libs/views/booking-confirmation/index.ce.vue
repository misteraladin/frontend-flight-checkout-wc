<template>
  <div class="booking">
    <h1 class="booking__title">{{ t('BOOKING_DETAIL_HEADING') }}</h1>
    <div class="booking__main">
      <h3 class="booking__subtitle">{{ t('CHECK_DETAILS') }}</h3>
      <Card>
        <template v-slot:header>
          <span>{{ t('CONTACT_DETAILS') }}</span>
        </template>
        <div class="booking__main-column-2">
          <p class="span-2-column">
            1. {{ reservationDetail.ReservationVendor.Title }}
            {{ reservationDetail.ReservationVendor.FirstName }}
            {{ reservationDetail.ReservationVendor.LastName }}
          </p>
          <div>
            <h5>{{ t('PAX.TELP') }}</h5>
            <span>{{ reservationDetail.ReservationVendor.HomePhone }}</span>
          </div>
          <div>
            <h5>{{ t('PAX.EMAIL') }}</h5>
            <span>{{ reservationDetail.ReservationVendor.Email }}</span>
          </div>
        </div>
      </Card>
      <Card>
        <template v-slot:header>
          <span>{{ t('PASSENGER_DETAILS') }}</span>
        </template>
        <div
          class="booking__main-column-2"
          v-for="(pax, i) in reservationDetail.ReservationVendor.Pax"
        >
          <p class="span-2-column">
            {{ i + 1 }}. {{ pax.Title }}
            {{ pax.FirstName }}
            {{ pax.LastName }}
          </p>
          <div>
            <h5>{{ t('PAX.DOB') }}</h5>
            <span>{{ toDate(pax.BirtOfDate, locale) }}</span>
          </div>
          <div>
            <h5>{{ t('PAX.NATIONALITY') }}</h5>
            <span>{{ getCountryName(pax.Nationality) }}</span>
          </div>
          <div>
            <h5>{{ t('PAX.ID_TYPE') }}</h5>
            <span>{{ pax.IdentityType }}</span>
          </div>
          <div>
            <h5>{{ t('PAX.ID_NO') }}</h5>
            <span>{{ pax.IdentityNumber }}</span>
          </div>
          <template v-if="pax.IdentityType !== 'NIK'">
            <div>
              <h5>{{ t('PAX.ID_EXPIRY') }}</h5>
              <span>{{ toDate(pax.Passport.Expire, locale) }}</span>
            </div>
            <div>
              <h5>{{ t('PAX.ID_COI') }}</h5>
              <span>{{ getCountryName(pax.Passport.OriginCountry) }}</span>
            </div>
          </template>
        </div>
      </Card>
    </div>
    <div class="booking__sidebar">
      <h3 class="booking__subtitle">{{ t('BOOKING_DETAILS') }}</h3>
      <Card alternate class="booking__timeline">
        <div class="booking__detail-status">
          <div>
            <span>Booking ID</span>
            <span>{{ reservation.ReservationCode }}</span>
          </div>
          <div>
            <span>Status</span>
            <span class="color-red">{{
              reservation.ReservationStatusDetail
            }}</span>
          </div>
          <div>
            <span>{{ t('PTL') }}</span>
            <span class="color-red">{{
              toDateTime(reservation.TimeLimitPayment)
            }}</span>
          </div>
        </div>
        <FlightCard
          :segment="departureFLights.Segments"
          :header="t('DEPARTURE')"
        />
        <FlightCard
          :segment="returnFlights.Segments"
          :header="t('RETURN')"
          v-if="returnFlights"
        />
        <div class="booking__price-detail">
          <h4 class="booking__price-detail_heading">Detail Harga</h4>
          <div>
            <span>Subtotal</span>
            <span
              ><b>{{ toIDR(reservation.TotalResult) }}</b></span
            >
          </div>
          <div v-if="reservation.VoucherCode">
            <span>{{ t('PROMO_CODE') }} ({{ reservation.VoucherCode }})</span>
            <span>{{
              toIDR(+reservation.TotalAfterDiscount - +reservation.TotalResult)
            }}</span>
          </div>
          <div class="booking__price-detail_total">
            <span>Total</span>
            <span class="color-red">{{
              toIDR(reservation.TotalAfterDiscount)
            }}</span>
          </div>
          <div class="booking__coupon-input" v-if="onCoupon">
            <ElInput
              placeholder="Masukkan kode promo"
              class="booking__coupon-input-form"
              v-model="coupon"
            ></ElInput>
            <Button @click="onUseCoupon">{{ t('APPLY_COUPON') }}</Button>
          </div>
          <Coupon :t="t" v-else @add-coupon="onCoupon = true" />
          <Button type="button" variant="warning">{{ t('PAY_NOW') }}</Button>
        </div>
      </Card>
      <span class="booking__agreement">{{ t('AGREEMENT') }}</span>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, reactive, ref } from 'vue';
import { useI18n } from 'vue-i18n';
import messages from './lang';
import axios from 'axios';

import { toIDR, toDate } from '../../../utils/index';

import Card from '../../atoms/cards/card.vue';
import FlightCard from '../../atoms/cards/flight-card.vue';
import Button from '../../atoms/button/button.vue';

import Coupon from './coupon.vue';

import { ElInput } from 'element-plus';

import { Country, Reservation } from './types';

interface Props {
  data: any;
  reservation: string;
  countries: string;
  language?: string;
}

const props = defineProps<Props>();

const data = reactive(props.data ? JSON.parse(props.data) : null);

const reservation = reactive<Reservation>(
  props.reservation ? JSON.parse(props.reservation) : null
);

const departureFLights = reactive(JSON.parse(data.segment1));

const returnFlights = reactive(JSON.parse(data.segment2));

const reservationDetail = reactive(reservation.ReservationDetail[0]);

const locale = computed(() => (props.language === 'en' ? 'en-GB' : 'id-ID'));

//find country by code
const countries = reactive<Country[]>(JSON.parse(props.countries));
const getCountryName = (id: string) =>
  countries.find((c) => c.CountryCode === id)?.CountryName || 'Unknown';

const { t } = useI18n({
  messages: messages,
});

const toDateTime = (string: string) =>
  new Date(string).toLocaleDateString('es-CL', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    minute: '2-digit',
    hour: '2-digit',
  });

const onCoupon = ref(false);
const coupon = ref('');
const onUseCoupon = async () => {
  console.log(coupon.value);
  const res = await axios.post('/payment/get_promo', {
    code: coupon.value,
  });
  console.log(res.data);
};

console.log(props);
</script>

<style lang="scss">
@use '@/styles/booking-confirmation';
</style>

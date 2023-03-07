<template>
  <transition name="slide-down">
    <ElAlert
      :title="alert.message"
      :type="alert.type"
      :closable="false"
      center
      v-if="alert.isOn"
      style="top: 0"
    ></ElAlert>
  </transition>
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
            1. {{ t(`TITLE.${reservationDetail.ReservationVendor.Title}`) }}
            {{ reservationDetail.ReservationVendor.FirstName }}
            {{ reservationDetail.ReservationVendor.LastName }}
          </p>
          <div>
            <h5>{{ t('PAX.TELP') }}</h5>
            <span>+{{ reservationDetail.ReservationVendor.MobilePhone }}</span>
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
          v-for="(pax, i) in sortedPassengers(
            reservationDetail.ReservationVendor.Pax
          )"
        >
          <p class="span-2-column">
            {{ i + 1 }}. {{ t(`TITLE.${pax.Title}`) }}
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
            <span>{{ t('Passport') }}</span>
          </div>
          <div>
            <h5>{{ t('PAX.ID_NO') }}</h5>
            <span>{{ pax.Passport.Number }}</span>
          </div>
          <!-- <template v-if="pax.IdentityType !== 'NIK'"> -->
          <div>
            <h5>{{ t('PAX.ID_COI') }}</h5>
            <span>{{ getCountryName(pax.Passport.OriginCountry) }}</span>
          </div>
          <div>
            <h5>{{ t('PAX.ID_EXPIRY') }}</h5>
            <span>{{ toDate(pax.Passport.Expire, locale) }}</span>
          </div>
          <!-- </template> -->
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
          :locale="locale"
          :t="t"
        />
        <FlightCard
          :segment="returnFlights.Segments"
          :header="t('RETURN')"
          :locale="locale"
          :t="t"
          v-if="returnFlights"
        />
        <div class="booking__price-detail">
          <h4 class="booking__price-detail_heading">{{ t('price_detail') }}</h4>
          <div>
            <span>Subtotal</span>
            <span
              ><b>{{ toIDR(reservation.TotalAfterDiscount) }}</b></span
            >
          </div>
          <div v-if="reservation.VoucherCode">
            <span>{{ t('PROMO_CODE') }} ({{ reservation.VoucherCode }})</span>
            <span>{{ '-' + toIDR(+reservation.Discount) }}</span>
          </div>
          <div class="booking__price-detail_total">
            <span>Total</span>
            <span class="color-red">{{ toIDR(reservation.TotalResult) }}</span>
          </div>
          <div class="booking__coupon-input" v-if="onCoupon">
            <ElInput
              :placeholder="t('input_promo_code')"
              class="booking__coupon-input-form"
              :style="{ height: '48px' }"
              v-model="coupon"
            ></ElInput>
            <Button
              :style="{
                width: 'unset !important',
                marginTop: 'unset !important',
              }"
              @click="onUseCoupon"
              >{{ t('APPLY_COUPON') }}</Button
            >
          </div>
          <Coupon
            :t="t"
            v-else
            @add-coupon="onCoupon = true"
            @remove-coupon="onRemoveCoupon"
            :reservation="reservation"
          />
          <Button type="button" variant="warning" @click="onPayBooking">{{
            t('PAY_NOW')
          }}</Button>
        </div>
      </Card>
      <span class="booking__agreement">{{ t('AGREEMENT') }}</span>
    </div>
  </div>
  <div id="booking-confirmation-mobile">
    <Header>
      {{ t('CONFIRMATION') }}
    </Header>
    <StatusOrder :reservation="reservation" :t="t" />
    <FlightItem
      :title="t('DEPARTURE')"
      :segment="departureFLights"
      :t="t"
      :has-detail-button="true"
      @showDetail="showModalDetail = true"
    />

    <FlightItem
      class="pt-0"
      :title="t('RETURN')"
      :segment="returnFlights"
      :t="t"
      :has-detail-button="false"
      v-if="returnFlights"
    />

    <DetailPassanger
      :title="t('PASSENGER_DETAILS')"
      :passengers="reservation.ReservationDetail[0].ReservationVendor.Pax"
      :highest-baggage="highestBaggage"
    />

    <div class="promo-box">
      <span class="title">{{ t('PROMO_CODE') }}</span>
      <Coupon
        :t="t"
        @add-coupon="onCoupon = true"
        @remove-coupon="onRemoveCoupon"
        :reservation="reservation"
      />
    </div>

    <div class="booking__price-detail-mobile">
      <h4 class="booking__price-detail_heading">{{ t('price_detail') }}</h4>
      <div>
        <span>Subtotal</span>
        <span
          ><b>{{ toIDR(reservation.TotalAfterDiscount) }}</b></span
        >
      </div>
      <div v-if="reservation.VoucherCode">
        <span>{{ t('PROMO_CODE') }} ({{ reservation.VoucherCode }})</span>
        <span>{{ '-' + toIDR(+reservation.Discount) }}</span>
      </div>
      <div class="booking__price-detail-mobile_total">
        <span>Total</span>
        <span class="color-red">{{ toIDR(reservation.TotalResult) }}</span>
      </div>
    </div>

    <Footer @next="onPayBooking">{{ t('PAY_NOW') }}</Footer>

    <ModalPeek v-model:show="onCoupon" @close="onCoupon = false">
      <div class="coupon-modal">
        <h4>{{ t('PROMO_CODE') }}</h4>
        <FormInput
          type="text"
          :title="t('PROMO_CODE')"
          v-model="coupon"
          :placeholder-text="t('input_promo_code')"
        >
          <template #info>
            <FormInputInfo type="Name" :t="t" />
          </template>
        </FormInput>
      </div>
      <template #footer>
        <button class="btn btn-primary-outline" @click="onCoupon = false">
          {{ t('cancel') }}
        </button>

        <button class="btn btn-primary" @click="onUseCoupon">
          {{ t('APPLY_COUPON') }}
        </button>
      </template>
    </ModalPeek>

    <ModalWindow
      v-model:show="showModalDetail"
      @close="showModalDetail = false"
      :title="t('booking_details')"
    >
      <template v-slot:header>
        {{ t('booking_details') }}
      </template>
      <div class="booking-detail__modal-flight">
        <FlightCard
          :segment="departureFLights.Segments"
          :header="t('DEPARTURE')"
          :locale="locale"
          :t="t"
        />
        <FlightCard
          :segment="returnFlights.Segments"
          :header="t('RETURN')"
          :locale="locale"
          :t="t"
          v-if="returnFlights"
        />
        <!-- <PriceCard
          :heading="t('departure_price')"
          :fare="departureFLights.FareDetail"
        />
        <PriceCard
          :heading="t('return_price')"
          :fare="returnFlights.FareDetail"
          v-if="returnFlights"
        /> -->
        <div class="booking__total">
          <span>Total</span>
          <span>{{ toIDR(total) }}</span>
        </div>
      </div>
      <template v-slot:footer>
        {{ t('close') }}
      </template>
    </ModalWindow>
  </div>
  <PaymentContainerVue
    @cancel="paymentCancel"
    :src="paymentIframe.url"
    v-if="paymentIframe.show"
  />
  <Overlay :show="isLoadingCoupon" :lock-scroll="true" z-index="2000">
    <div
      :style="{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
      }"
    >
      <Loading type="spinner" size="50" />
    </div>
  </Overlay>
</template>

<script lang="ts" setup>
import { computed, onMounted, onUnmounted, reactive, ref } from 'vue';
import { useI18n } from 'vue-i18n';
import messages from './lang';
import axios from 'axios';

import { toIDR, toDate } from '../../../utils/index';
import { sortedPassengers } from '../../../utils/flight';

import Card from '../../atoms/cards/card.vue';
import FlightCard from '../../atoms/cards/flight-card.vue';
import Button from '../../atoms/button/button.vue';

import Coupon from './coupon.vue';
import PaymentContainerVue from '../../components/payment-container/payment-container.vue';

import { ElInput, ElAlert } from 'element-plus';

import { Country, Departure, Reservation } from './types';

import Header from '../common-mobile/mobile-header.vue';
import StatusOrder from '../../pages/booking-confirmation-mobile/booking-confirmation-status-order-mobile.vue';
import FlightItem from '../booking-detail/booking-detail-flight-item-mobile.vue';
import DetailPassanger from '../../pages/booking-confirmation-mobile/booking-confirmation-detail-passanger-mobile.vue';
import Footer from '../common-mobile/mobile-footer.vue';

import PriceCard from '../../atoms/cards/price-card.vue';
import ModalWindow from '../common-mobile/ModalWindow.vue';

import ModalPeek from '../common-mobile/ModalPeek.vue';
import FormInput from '../common-mobile/FormInput.vue';

import { Overlay, Loading } from 'vant';

interface Props {
  data: any;
  reservation: string;
  countries: string;
  language?: string;
  promocreate: string;
  token: string;
  promoCancel: string;
  appToken: string;
  paymentEndpoint: string;
  paymentToken: string;
  requestPayment: string;
}

const props = defineProps<Props>();

const data = reactive(props.data ? JSON.parse(props.data) : null);

const reservation = reactive<Reservation>(
  props.reservation ? JSON.parse(props.reservation) : null
);

const departureFLights = reactive(JSON.parse(data.segment1));

const returnFlights = reactive(JSON.parse(data.segment2));
// console.log('props', departureFLights, returnFlights);

const highestBaggage = computed(() => {
  return departureFLights.Segments.Departure[0].Baggage;
});

const reservationDetail = reactive(reservation.ReservationDetail[0]);

const locale = computed(() => (props.language === 'en' ? 'en-GB' : 'id-ID'));

//find country by code
const countries = reactive<Country[]>(JSON.parse(props.countries));
const getCountryName = (id: string) =>
  countries.find((c) => c.CountryCode === id)?.CountryName || 'Unknown';

const { t } = useI18n({
  messages: messages,
});

const total = computed(() => {
  if (!returnFlights) return departureFLights.Fare;
  return departureFLights.Fare + returnFlights.Fare;
});

// need to move to utils,
// function was ready
const toDateTime = (string: string) =>
  new Date(string).toLocaleDateString('es-CL', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    minute: '2-digit',
    hour: '2-digit',
  });

const alert = reactive<{
  isOn: boolean;
  type: 'success' | 'error';
  message: string;
}>({
  isOn: false,
  type: 'success',
  message: '',
});

const onCoupon = ref(false);
const coupon = ref('');
const isLoadingCoupon = ref(false);
const couponData = reactive({
  PriceAfterDiscount: 0,
  PriceBeforeDiscount: 0,
  PromoCode: '',
  PromoDiscount: '',
});

const onUseCoupon = async () => {
  onCoupon.value = false;

  if (!coupon.value) {
    alert.type = 'error';
    alert.message = t('PROMO_REQUIRED');
    alert.isOn = true;

    return setTimeout(() => {
      alert.isOn = false;
      // location.reload();
    }, 5000);
  }

  isLoadingCoupon.value = true;
  const res = await axios.post(props.promocreate, {
    code: coupon.value,
    ReservationCode: reservation.ReservationCode,
  });
  coupon.value = '';

  isLoadingCoupon.value = false;

  if (res.data.status === 200) {
    alert.type = 'success';
    alert.message = t('COUPON_RESPONSE.APPLIED');
    alert.isOn = true;

    couponData.PriceAfterDiscount = reservation.TotalResult;
    reservation.VoucherCode = res.data.data_promo.PromoCode;
    reservation.Discount = res.data.data_promo.PromoDiscount;
    reservation.TotalResult = res.data.data_promo.PriceAfterDiscount;

    setTimeout(() => {
      alert.isOn = false;
      // location.reload();
    }, 5000);
  } else {
    alert.type = 'error';
    alert.message = res.data.message;
    alert.isOn = true;
    onCoupon.value = false;

    setTimeout(() => {
      alert.isOn = false;
    }, 5000);
  }
};

const onRemoveCoupon = async () => {
  isLoadingCoupon.value = true;
  const res = await axios.post(props.promoCancel, {
    code: coupon.value,
    ReservationCode: reservation.ReservationCode,
  });

  if (res.data.status === 200) {
    alert.type = 'error';
    alert.message = t('COUPON_RESPONSE.REMOVED');
    isLoadingCoupon.value = false;
    reservation.VoucherCode = '';
    reservation.Discount = 0;
    reservation.TotalResult =
      couponData.PriceAfterDiscount || reservation.TotalAfterDiscount;
    alert.isOn = true;
    setTimeout(() => {
      alert.isOn = false;

      // location.reload();
    }, 5000);
  }
};

//payment function
const paymentIframe = reactive({
  url: '',
  show: false,
});

const onPayBooking = async () => {
  try {
    const res = await axios.post(props.requestPayment, {
      booking_no: reservation.ReservationCode,
    });
    paymentIframe.url = res.data.data.redirect_url;
    paymentIframe.show = true;
  } catch (error) {
    console.log(error);
  }
};

const paymentCancel = () => {
  console.log('payment canceled');
};

const listenEvent = (e: any) => {
  const {
    message,
    redirect_url: redirectUrl,
    payment_type: paymentType,
  } = e.data;

  if (message === 'payment-cancel') {
    paymentIframe.show = false;
  }

  if (message === 'payment-complete') {
    window.location.replace(redirectUrl);
  }
};

const showModalDetail = ref(false);

onMounted(() => {
  window.addEventListener('message', listenEvent);
});

onUnmounted(() => {
  window.removeEventListener('message', listenEvent);
});
</script>

<style lang="scss">
@use '@/styles/booking-confirmation';
@use '@/styles/pages/booking-confirmation-mobile';
@use '@/styles/pages/booking-detail-mobile';
@import 'https://fastly.jsdelivr.net/npm/vant@4/lib/index.css';
</style>

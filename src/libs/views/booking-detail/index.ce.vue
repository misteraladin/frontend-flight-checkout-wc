<template>
  <div class="booking">
    <h1 class="booking__title">{{ t('BOOKING_DETAIL_HEADING') }}</h1>

    <div class="booking__main">
      <h3 class="booking__subtitle">{{ t('CONTACT_DETAILS') }}</h3>
      <LoginBanner login-url="https://misteraladin.com"></LoginBanner>
      <ElForm
        ref="formRef"
        label-position="top"
        class="booking__main"
        :hide-required-asterisk="true"
      >
        <ContactDetail
          :t="t"
          :countries="parsedCountries"
          :model="bookingDetail.contact"
        />

        <Card>
          <template v-slot:header>
            <span>{{ t('PASSENGER_DETAILS') }}</span>
            <div>
              <Switcher>{{ t('SAME_AS_CONTACT') }}</Switcher>
            </div>
          </template>

          <!-- adult mapping -->
          <PassengerDetail
            v-for="(_, i) in +parsedData.adult"
            :key="i"
            :i="i + 1"
            type="adult"
            :t="t"
            :countries="parsedCountries"
          />

          <!-- children mapping -->

          <PassengerDetail
            v-for="(_, i) in +parsedData.child"
            :key="i"
            :i="i + +parsedData.adult + 1"
            type="child"
            :t="t"
            :countries="parsedCountries"
          />

          <!-- infant mapping -->

          <PassengerDetail
            v-for="(_, i) in +parsedData.infant"
            :key="i"
            :i="i + +parsedData.adult + +parsedData.child + 1"
            type="infant"
            :t="t"
            :countries="parsedCountries"
          />
        </Card>
      </ElForm>
      <div class="booking__main-column-2-left">
        <p style="color: #dd2c00; font-size: 16px; font-weight: 500">
          Perhatian: nama penumpang harus sama dengan paspor (penerbangan
          internasional), atau KTP/SIM (penerbangan domestik). Data penumpang
          tidak dapat diubah setelah halaman ini.
        </p>
        <Button variant="warning" @click="onConfirmBooking">
          Konfirmasi
        </Button>
      </div>
    </div>
    <div class="booking__sidebar">
      <h3 class="booking__subtitle">{{ t('BOOKING_DETAILS') }}</h3>
      <Card alternate class="booking__timeline">
        <FlightCard
          :segment="departureFLights.Segments"
          :header="'Keberangkatan'"
        />
        <FlightCard
          :segment="returnFlights.Segments"
          :header="'Kepulangan'"
          v-if="returnFlights"
        />
        <PriceCard
          :heading="'Harga Keberangkatan'"
          :fare="departureFLights.FareDetail"
        />
        <PriceCard
          :heading="'Harga Kepulangan'"
          :fare="returnFlights.FareDetail"
          v-if="returnFlights"
        />
        <div class="booking__total">
          <span>Total</span>
          <span>{{ toIDR(total) }}</span>
        </div>
      </Card>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { CountryCode } from './types';

import Button from '../../atoms/button/button.vue';
import LoginBanner from '../../components/login-banner/login-banner.vue';

import { ElForm, ElInput, ElOption } from 'element-plus';
import type { FormInstance } from 'element-plus';

import Input from '../../atoms/inputs/input.vue';
import Dropdown from '../../atoms/inputs/dropdown.vue';
import InputGroup from '../../atoms/inputs/input-group.vue';
import Switcher from '../../atoms/inputs/switcher.vue';

import FlightCard from '../../atoms/cards/flight-card.vue';
import PriceCard from '../../atoms/cards/price-card.vue';
import Card from '../../atoms/cards/card.vue';

import PassengerDetail from './passenger-detail.vue';
import ContactDetail from './contact-detail.vue';

import { computed, HTMLAttributes, onMounted, reactive, ref } from 'vue';
import { toIDR } from '../../../utils';

import useVuelidate from '@vuelidate/core';
import { helpers, required, minLength, maxLength } from '@vuelidate/validators';

import { useI18n } from 'vue-i18n';
import messages from './lang';

interface Props extends HTMLAttributes {
  data: string;
  languange?: 'en' | 'id';
  countries: string;
}

const props = defineProps<Props>();

const { t } = useI18n({
  messages: messages,
});

const parsedData = reactive(props.data ? JSON.parse(props.data) : null);

const departureFLights = reactive(JSON.parse(parsedData.segment1));

const returnFlights = reactive(JSON.parse(parsedData.segment2));

const parsedCountries = reactive(JSON.parse(props.countries));

const total = computed(() => {
  if (!returnFlights) return departureFLights.FareDetail.Total;
  return departureFLights.FareDetail.Total + returnFlights.FareDetail.Total;
});

// console.log('departure', departureFLights);
// console.log('return', returnFlights);
console.log('data', parsedCountries);
// console.log(props.languange);

//form Object
const formRef = ref<FormInstance>();
// const showValidation = ref(false);
const bookingDetail = reactive<any>({
  contact: {
    title: 'Tuan',
    firstName: '',
    middleName: '',
    lastName: '',
    phoneCode: '62',
    phoneNumber: '',
    email: '',
  },
  passengers: [],
});

onMounted(() => {
  for (
    let i = 0;
    i < +parsedData.adult + +parsedData.child + +parsedData.infant;
    i++
  ) {
    bookingDetail.passengers.push({
      title: 'Mr',
      firstName: '',
      middleName: '',
      lastName: '',
      nationality: '',
      dob: '',
      idType: 'NIK',
      idNo: '',
      idExpiry: '',
      idOrigin: '',
    });
  }
});

const v = useVuelidate();

const onConfirmBooking = async () => {
  // console.log(t('VALIDATION.NAME'));
  // console.log(bookingDetail);
  console.log(await v.value.$validate());
  console.log(v.value);
  console.log(bookingDetail);
  // showValidation.value = true;
  // await formRef.value!.validate((valid) => {
  //   console.log(valid);
  // });
};
</script>

<style lang="scss">
@use '@/styles/booking-detail';
</style>

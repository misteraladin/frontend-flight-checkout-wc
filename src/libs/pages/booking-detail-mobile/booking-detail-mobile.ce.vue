<template>
  <div id="booking-detail-mobile">
    <Header>
      {{ t("booking_details") }}
    </Header>

    <FlightItem
      :title="t('departure')"
      :segment="departureSegment"
      :t="t"
      has-detail-button
    />

    <FlightItem
      class="pt-0"
      :title="t('return')"
      :segment="returnSegment"
      :t="t"
    />

    <BannerLogin :t="t" />

    <section class="booking-detail__contact">
      <h2>{{ t('booking_details') }}</h2>
      <Passenger
        type="contact"
        :passenger="form.contact"
        :placeholder="t('enter_details')"
        :t="t"
      />
    </section>

    <section class="booking-detail__traveler pt-0">
      <h2>{{ t('traveler_details') }}</h2>
      <div
        v-for="(passengerTypes, keyTypes, indexTypes) in form.passengers"
        :key="indexTypes"
      >
        <Passenger
          v-for="(passenger, index) in passengerTypes"
          :key="index"
          :type="keyTypes"
          :passenger="passenger"
          :placeholder="t('enter_details')"
          :t="t"
        />
      </div>
    </section>

    <section class="booking-detail__info">
      <p>{{ t('passenger_info') }}</p>
    </section>

    <Footer @next="submit">
      {{ t("next") }}
    </Footer>

    <!-- <ModalWindow>
      <template v-slot:header>
        {{ t("booking_details") }}
      </template>

      <template v-slot:footer>
        {{ t("close") }}
      </template>
    </ModalWindow> -->

    <!-- <ModalBase>
      <template v-slot:image>
        <img src="/booking-mobile/got_message.svg" alt="Got Message" />
      </template>
      <template v-slot:title>
        {{ t("order_confirmation_text") }}
      </template>

      <template v-slot:footer>
        <button class="btn btn-primary">
          {{ t('continue') }}
        </button>

        <button class="btn btn-primary-outline">
          {{ t('check_again') }}
        </button>
      </template>
    </ModalBase> -->

    <!-- <ModalBase>
      <template v-slot:image>
        <img src="/booking-mobile/loader-mnc.svg" alt="Loading" />
      </template>
      <template v-slot:title>
        {{ t("order_process_title") }}
      </template>

      {{ t("order_process_text") }}
    </ModalBase> -->

    <!-- <ModalBase>
      <template v-slot:image>
        <img src="/booking-mobile/failed.svg" alt="failed" />
      </template>
      {{ t('failed_to_order') }}
      <template v-slot:footer>
        <button class="btn btn-primary">
          {{ t('let_continue') }}
        </button>
      </template>
    </ModalBase> -->
  </div>
</template>

<script setup lang="ts">
import Header from "../common-mobile/mobile-header.vue";
import FlightItem from "./booking-detail-flight-item-mobile.vue";
import Passenger from "./booking-detail-passenger-mobile.vue"
import BannerLogin from "../common-mobile/mobile-banner-login.vue";
import Footer from "../common-mobile/mobile-footer.vue";
import ModalWindow from "../common-mobile/ModalWindow.vue";
import ModalBase from "../common-mobile/ModalBase.vue";

import {
  RootObject as IRootObject,
  Segment as ISegment,
  Form as IForm,
} from "./type-booking-detail-mobile";
import { onMounted, reactive } from "vue";
import { useI18n } from "vue-i18n"; // import i18n plugin
import messages from "./lang"; // import dictionary

// create i18n instance
const { t } = useI18n({
  messages,
});

const props = defineProps({
  data: {
    type: String,
    required: true,
  },
});

const data: IRootObject = reactive(props.data ? JSON.parse(props.data) : null);
const departureSegment: ISegment = reactive(data.segment1 ? JSON.parse(data.segment1) : null);
const returnSegment: ISegment = reactive(data.segment2 ? JSON.parse(data.segment2) : null);

// Passenger
const form: IForm = reactive({
  contact: {
    title: 'mr',
    firstName: '',
    middleName: '',
    lastName: '',
    phoneCode: '62',
    phoneNumber: '',
    email: '',
  },
  passengers: {
    adult: [],
    child: [],
    infant: [],
  },
});
// set passenger object structure
const emptyPassenger = ((type: string) => {
  const titlePassenger: any = {
    adult: 'mr',
    child: 'mstr',
    infant: 'mstr',
  };

  return {
    title: titlePassenger[type],
    firstName: '',
    middleName: '',
    lastName: '',
    nationality: 'ID',
    dob: '',
    idType: 'NIK',
    idNo: '',
    idExpiry: '',
    idOrigin: 'ID',
  };
});
// examaple result ['adult', 'adult', 'child', 'infant']
const passengerTypes = (() => ([
  ...Array.from(Array(+data.adult), (() => 'adult')),
  ...Array.from(Array(+data.child), (() => 'child')),
  ...Array.from(Array(+data.infant), (() => 'infant')),
]));
const initialPassengers = () => {
  const types = passengerTypes();

  const passengers: any = {
    adult: [],
    child: [],
    infant: [],
  };
  types.forEach((element) => {
    passengers[element].push(emptyPassenger(element));
  });

  form.passengers = passengers;
};
onMounted(() => {
  initialPassengers();
});

const submit = () => {
  console.log('passenger: ', form);
}
</script>

<style lang="scss">
@use '@/styles/pages/booking-detail-mobile';
</style>
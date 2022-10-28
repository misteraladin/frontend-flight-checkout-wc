<template>
  <div id="booking-detail-mobile">
    <Header>
      {{ t("booking_details") }}
    </Header>

    <FlightItem />
    <BannerLogin :t="t" />

    <section class="booking-detail__contact">
      <h2 class="m-0">{{ t('booking_details') }}</h2>
      <Passenger
        :placeholder="t('enter_details')"
      />
    </section>

    <section class="booking-detail__traveler">
      <h2>{{ t('traveler_details') }}</h2>
    </section>

    <section class="booking-detail__info">
      <p>{{ t('passenger_info') }}</p>
    </section>

    <Footer>
      {{ t("next") }}
    </Footer>
  </div>
</template>

<script setup lang="ts">
import Header from "./mobile-header.vue";
import FlightItem from "./booking-detail-flight-item-mobile.vue";
import Passenger from "./booking-detail-passenger-mobile.vue"
import BannerLogin from "./mobile-banner-login.vue";
import Footer from "./mobile-footer.vue";

import {
  RootObject as IRootObject,
  Segment as ISegment,
} from "./type-booking-detail-mobile";
import { reactive } from "vue";
import { useI18n } from "vue-i18n"; // import i18n plugin
import messages from "./lang-booking-detail-mobile"; // import dictionary

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
</script>

<style lang="scss">
@use '@/styles/pages/booking-detail-mobile';
</style>


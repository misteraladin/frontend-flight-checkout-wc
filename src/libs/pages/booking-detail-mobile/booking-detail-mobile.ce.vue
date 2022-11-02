<template>
  <div id="booking-detail-mobile">
    <Header>
      {{ t("booking_details") }}
    </Header>

    <FlightItem
      :title="t('departure')"
      :segment="departureSegment"
      :t="t"
    />

    <FlightItem
      :title="t('return')"
      :segment="returnSegment"
      :t="t"
    />

    <BannerLogin :t="t" />

    <section class="booking-detail__contact">
      <h2>{{ t('booking_details') }}</h2>
      <Passenger
        :placeholder="t('enter_details')"
        class="m-0 p-0"
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
import Header from "./mobile-header.vue";
import FlightItem from "./booking-detail-flight-item-mobile.vue";
import Passenger from "./booking-detail-passenger-mobile.vue"
import BannerLogin from "./mobile-banner-login.vue";
import Footer from "./mobile-footer.vue";
import ModalBase from "../common-mobile/ModalBase.vue";

import {
  RootObject as IRootObject,
  Segment as ISegment,
} from "./type-booking-detail-mobile";
import { reactive } from "vue";
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
</script>

<style lang="scss">
@use '@/styles/pages/booking-detail-mobile';
</style>


<template>
  <div id="booking-confirmation-mobile">
    <Header>
      {{ t('confirmation') }}
    </Header>
    <StatusOrder :reservation="reservation" :t="t" />
    <Flight
      :title="t('departure')"
      :segments="departureSegment.Segments"
      :t="t"
    />
    <Flight
      v-if="booking.trip === '2'"
      :title="t('return')"
      :segments="returnSegment.Segments"
      :t="t"
    />
    <!-- <DetailPassanger
      :title="t('traveler_details')"
      :passengers="reservation.ReservationDetail[0].ReservationVendor.Pax"
    /> -->
    <Promocode />
    <DetailPrice :reservation="reservation" :t="t" />
    <Footer>{{ t('pay_now_btn') }}</Footer>
  </div>
</template>

<script setup lang="ts">
import Header from '../common-mobile/mobile-header.vue';
import Footer from '../common-mobile/mobile-footer.vue';
import StatusOrder from './booking-confirmation-status-order-mobile.vue';
import Flight from './booking-confirmation-flight-mobile.vue';
import DetailPassanger from './booking-confirmation-detail-passanger-mobile.vue';
import Promocode from './booking-confirmation-promocode-mobile.vue';
import DetailPrice from './booking-confirmation-detail-price-mobile.vue';
import { reactive, ref } from 'vue';

// lang
import { useI18n } from 'vue-i18n';
import messages from './lang';

// type
import {
  RootObject as IBooking,
  Segment as ISegment,
} from '../booking-detail-mobile/type-booking-detail-mobile';
import { RootObject as IReservation } from './type';

const { t } = useI18n({ messages });

interface Props {
  data: string;
  reservation: string;
}
const props = defineProps<Props>();
const reservation: IReservation = reactive(
  props.reservation ? JSON.parse(props.reservation) : null
);
const booking: IBooking = reactive(props.data ? JSON.parse(props.data) : null);
const departureSegment: ISegment = reactive(
  booking.segment1 ? JSON.parse(booking.segment1) : null
);
const returnSegment: ISegment = reactive(
  booking.segment2 ? JSON.parse(booking.segment2) : null
);
</script>

<style lang="scss">
@use '@/styles/pages/booking-confirmation-mobile';
</style>

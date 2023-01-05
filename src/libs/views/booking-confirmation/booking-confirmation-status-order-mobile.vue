<template>
  <div class="status-order">
    <div class="booking-id">
      <div class="title">Booking ID</div>
      <span class="content-booking">{{ reservation.ReservationCode }}</span>
    </div>
    <div class="status">
      <div class="title">Status</div>
      <span class="content-status">{{
        reservation.ReservationStatusDetail
      }}</span>
    </div>
    <div class="limit">
      <div class="title">{{ t('time_limit') }}</div>
      <span class="content-limit">{{
        toDateTime(reservation.TimeLimitPayment)
      }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { RootObject as IReservation } from './types';
import { toDateTime } from '../../../utils';

interface Props {
  reservation: IReservation;
  t: Function;
}
const { reservation, t } = defineProps<Props>();
</script>

<style lang="scss" scoped>
h1 {
  padding: 16px;
}
</style>

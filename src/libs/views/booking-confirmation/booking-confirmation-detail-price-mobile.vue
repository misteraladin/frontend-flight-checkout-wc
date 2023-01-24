<template>
  <div class="price-detail">
    <div class="title">{{ t('price_detail') }}</div>
    <div class="price">
      <div class="subtotal">
        <span>{{ t('subtotal') }}</span>
        <span>{{ currency }} {{ reservation.Total }}</span>
      </div>
      <div class="total">
        <span>{{ t('total') }}</span>
        <span>{{ currency }} {{ reservation.TotalAfterDiscount }}</span>
      </div>
    </div>
    <div class="include-tax">*{{ t('tax') }}</div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { RootObject as IReservation } from './types';

interface Props {
  reservation: IReservation;
  t: Function;
}
const { reservation, t } = defineProps<Props>();
const currency = computed(() => reservation.Currency);
</script>

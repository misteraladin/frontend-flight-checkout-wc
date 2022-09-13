<template>
  <div class="price-card">
    <span class="price-card__heading">{{ heading }}</span>
    <template v-for="detail in fare.Details">
      <span> {{ detail.Text }} </span>
      <span> {{ toIDR(detail.Amount) }} </span>
    </template>
  </div>
</template>

<script setup lang="ts">
import { toIDR } from '../../../utils';

interface FareDetail {
  Amount: number;
  Code: string;
  Currency: string;
  ForeignAmount: number;
  ForeignCurrency: string;
  Text: string;
}

interface Fare {
  Details: FareDetail[];
}

interface Props {
  heading: string;
  fare: Fare;
}

const { heading, fare } = defineProps<Props>();
</script>

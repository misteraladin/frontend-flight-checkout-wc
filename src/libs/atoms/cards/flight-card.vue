<template>
  <div class="flight-card">
    <span class="flight-card__heading">{{ header }}</span>
    <small class="flight-card__time">{{
      toDateWithDay(segment.Departure[0].DepartDate)
    }}</small>
  </div>
  <FlightCardItem
    v-for="flight in segment.Departure"
    :key="flight.SegmentSellKey"
    :flight="flight"
    :t="t"
  />
</template>

<script setup lang="ts">
import FlightCardItem from './flight-card-item.vue';
import { Segment } from './types';

interface Props {
  segment: Segment;
  header: string;
  locale: string;
  t: Function;
}

const { segment, header, locale, t } = defineProps<Props>();

const toDateWithDay = (value: string) =>
  new Date(value).toLocaleDateString(locale, {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
    weekday: 'long',
  });
</script>

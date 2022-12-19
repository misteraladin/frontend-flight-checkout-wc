<template>
  <div class="flight-card-item">
    <div v-if="flight.TransitTime" class="flight-card-item__transit">
      Transit {{ flight.TransitTime }} di {{ flight.OriginCityName }} ({{
        flight.Origin
      }})
    </div>
    <div class="flight-card-item__header">
      <img :src="flight.AirlineImageUrl" :alt="flight.AirlineName" />

      <span class="flight-card-item__airline-name">{{
        flight.AirlineName
      }}</span>

      <span class="flight-card-item__airline-class">
        {{ flight.ClassCategory }} Subclass({{ flight.ClassCode }})
      </span>
    </div>
    <div class="airline-timeline">
      <div>
        <span class="airline-timeline__time">
          {{ flight.DepartTime }}
        </span>
        <span class="airline-timeline__date">
          {{ toDateMonth(flight.DepartDate) }}
        </span>
      </div>

      <div>
        <span class="airline-timeline__city">
          {{ flight.OriginCityName }} ({{ flight.Origin }})
        </span>
        <span class="airline-timeline__airport">
          {{ flight.OriginName }}
        </span>
      </div>

      <span class="airline-timeline__flight-time">
        {{ flight.FlightTime }}
      </span>

      <div>
        <span class="airline-timeline__time airline-timeline__time--end">
          {{ flight.ArriveTime }}
        </span>
        <span class="airline-timeline__date">
          {{ toDateMonth(flight.ArriveDate) }}
        </span>
      </div>

      <div>
        <span class="airline-timeline__city">
          {{ flight.DestinationCityName }} ({{ flight.Destination }})
        </span>
        <span class="airline-timeline__airport">
          {{ flight.DestinationName }}
        </span>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Flight } from './types';

interface Props {
  flight: Flight;
}

const { flight } = defineProps<Props>();

// need to move to utils,
// function was ready
const toDateMonth = (value: string) => {
  return new Date(value).toLocaleDateString('id-ID', {
    day: '2-digit',
    month: 'short',
  });
};
</script>

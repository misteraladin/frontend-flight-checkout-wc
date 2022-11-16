<template>
  <div id="detail-flight">
    <div class="detail-title">
      {{ title }}
    </div>

    <div
      v-for="(segment, index) in data.segments"
      :key="index"
      class="detail-content"
    >
      <div v-if="segment.transitTime" class="transit">
        {{ $t('flight.transit_in', {
          time: segment.transitTime,
          place: segment.departureAirportCityName,
          code: segment.departureAirport,
        }) }}
      </div>

      <div class="airlines">
        <div>
          <div class="airlines-name">
            {{ segment.airlineName }} - {{ segment.flightNumber }}
            <img
              :src="segment.airlineImageUrl"
              class="ml-2"
              height="20px"
            >
          </div>

          <div class="airlines-class">
            {{ segment.classCategory }}
            ({{ $t('flight.subclass') }}
            {{ segment.classCode }})
          </div>
        </div>

        <div v-if="index === 0" class="price">
          {{ $t('general.currency') }}
          {{ priceFormat(data.totalFare) }}
        </div>
      </div>

      <div class="routes">
        <div class="routes-from">
          <div class="routes-time">
            <div class="time-hour">
              {{ segment.departureTime }}
            </div>

            <div class="time-date">
              {{ longDate(segment.departureDate) }}
            </div>
          </div>

          <div class="routes-name">
            <div class="name-airport">
              {{ segment.departureAirportCityName }}
              ({{ segment.departureAirport }})
            </div>

            <div class="name-place">
              {{ segment.departureAirportName }}
            </div>
          </div>
        </div>

        <div class="routes-duration">
          {{ segment.flightTime }}
          {{ $t('flight.direct') }}
        </div>

        <div class="routes-to">
          <div class="routes-time">
            <div class="time-hour">
              {{ segment.arrivalTime }}
            </div>

            <div class="time-date">
              {{ longDate(segment.arrivalDate) }}
            </div>
          </div>

          <div class="routes-name">
            <div class="name-airport">
              {{ segment.arrivalAirportCityName }}
              ({{ segment.arrivalAirport }})
            </div>

            <div class="name-place">
              {{ segment.arrivalAirportName }}
            </div>
          </div>
        </div>
      </div>

      <div class="notes">
        <span>*</span>
        {{ segment.cabinBaggage.baggageCabinWording }},
        {{ segment.cabinBaggage.baggageWording }}
      </div>
    </div>

    <div
      v-if="data.fareDetails && !withButton"
      class="detail-price"
    >
      <div class="price-title">
        {{ $t('checkout.price_detail') }}
      </div>

      <div
        v-for="(fare, key) in data.fareDetails"
        :key="key"
        class="price-item"
      >
        <div class="item-name">
          {{ fare.Text }}
        </div>
        <div class="item-nominal">
          {{ fare.ForeignCurrency }}
          {{ priceFormat(fare.Amount) }}
        </div>
      </div>

      <div class="price-total">
        <div class="total-name">
          Total
        </div>
        <div class="total-nominal">
          {{ $t('general.currency') }}
          {{ priceFormat(data.totalFare) }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  Segment as ISegment,
  Departure as IDeparture,
} from "./type-booking-detail-mobile";
import { toDateMonth } from '../../../utils';
import { computed, reactive } from "vue";

const props = defineProps({
  title: {
    type: String,
    default: '',
  },

  segment: {
    type: Object,
    required: true,
  },

  t: {
    type: Object,
    required: true,
  },
});

const segment = reactive<ISegment | any>(props.segment);
const t: any = reactive(props.t);

const segmentOrigin = computed<IDeparture>(() => segment.Segments.Departure[0]);
const segmentDepart = computed<IDeparture>(() => segment.Segments.Departure[segment.Segments.Departure.length - 1]);

const transitInfo = computed<string>(() => {
  const total: number = segment.Segments.TotalTransitDepart;

  if (total === 0) return t("direct");
  return t('transit', { total })
});

</script>

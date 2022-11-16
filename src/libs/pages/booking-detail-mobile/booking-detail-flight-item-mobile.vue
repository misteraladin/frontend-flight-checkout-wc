<template>
  <section class="booking-detail__flight-item">
    <div class="flight-item__title">
      <h2>{{ title }}</h2>

      <a
        v-if="hasDetailButton"
        class="btn-link"
        @click="$emit('showDetail')"
      >
        {{ t('see_detail') }}
      </a>
    </div>

    <div class="flight-item__info">
      <div class="flight-item__info-image">
        <img
          :src="segmentOrigin.AirlineImageUrl"
          :alt="segmentOrigin.AirlineName"
        />
      </div>

      <div class="flight-item__info-description">
        <div class="flight-item__info--title">
          {{ segmentOrigin.AirlineName }}
        </div>

        <div class="flight-item__info--subtitle">
          {{ segmentOrigin.ClassCategory }}
          (Subclass {{ segmentOrigin.ClassCode }})
        </div>
      </div>
    </div>

    <div class="flight-item__route">
      <div class="flight-item__route-name">
        <div class="flight-item__route--airport">
          {{ segmentOrigin.OriginCityName }}
          ({{ segmentOrigin.Origin }})
        </div>

        <div class="flight-item__route--arrow">
          <svg
            width="11"
            height="12"
            viewBox="0 0 11 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.47017 1.13684C6.21048 0.877147 5.78944 0.877146 5.52975 1.13684C5.27022 1.39636 5.27003 1.81708 5.52933 2.07684L8.77996 5.33329H1.33329C0.965103 5.33329 0.666626 5.63177 0.666626 5.99996C0.666626 6.36815 0.965103 6.66663 1.33329 6.66663H8.77996L5.52933 9.92308C5.27003 10.1828 5.27022 10.6036 5.52975 10.8631C5.78944 11.1228 6.21048 11.1228 6.47017 10.8631L10.6262 6.70707C11.0167 6.31654 11.0167 5.68338 10.6262 5.29285L6.47017 1.13684Z"
              fill="#424242"
            />
          </svg>
        </div>

        <div class="flight-item__route--airport">
          {{ segmentDepart.DestinationCityName }}
          ({{ segmentDepart.Destination }})
        </div>
      </div>

      <div class="flight-item__route-time">
        <span>{{ toDateMonth(segmentOrigin.DepartDate) }}</span>
        <span>{{ segmentOrigin.DepartTime }} - {{ segmentDepart.ArriveTime }}</span>
        <span>{{ segment.Segments.TravelTimeDepart }}</span>
        <span>{{ transitInfo }}</span>
      </div>
    </div>
  </section>
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

  hasDetailButton: {
    type: Boolean,
    default: false,
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

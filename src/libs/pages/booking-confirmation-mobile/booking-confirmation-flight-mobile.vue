<template>
  <div class="flight">
    <div class="title-flight">
      <span>{{title}}</span>
    </div>
    <div class="airline">
      <div class="img-airline">
        <img :src="origin.AirlineImageUrl" />
      </div>
      <div class="name-airline">
        <div>{{origin.AirlineName}}</div>
        <span>{{origin.ClassCategory}} (Subclas {{origin.ClassCode}})</span>
      </div>
    </div>
    <div class="card-flight">
      <div class="content-card">
        <div class="airport">
          <span>{{origin.OriginCityName}} ({{origin.Origin}}) </span>
          <img src="/booking-confirmation/arrow-right.svg" width="10" />
          <span>{{destination.DestinationCityName}} ({{destination.Destination}})</span>
        </div>
        <div class="schedule">
          <span> {{toDateMonth(origin.DepartDate)}} </span>
          <span> <img src="/booking-confirmation/vector.svg" width="4" /></span>
          <span> {{origin.DepartTime}} - {{destination.ArriveTime}} </span>
          <span> <img src="/booking-confirmation/vector.svg" width="4" /></span>
          <span> {{segments.TravelTimeDepart}} </span>
          <span> <img src="/booking-confirmation/vector.svg" width="4" /></span>
          <span> {{t('isTransit', segments.TotalTransitDepart)}} </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import {
  Segments as ISegments,
  Departure as IDeparture
} from "../booking-detail-mobile/type-booking-detail-mobile";
import {toDateMonth, } from "../../../utils"

interface Props {
  title: string
  segments: ISegments
  t: Function,
}
const { title, segments, t } = defineProps<Props>();
const origin = computed((): IDeparture => segments.Departure[0]);
const destination = computed((): IDeparture => segments.Departure[segments.Departure.length - 1]);
console.log(segments);
</script>
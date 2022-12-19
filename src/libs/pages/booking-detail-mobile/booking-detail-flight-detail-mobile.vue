<template>
  <div class="flight-detail">
    <div
      v-for="(flight, indexFlight) in flightSegments"
      :key="`flight-${indexFlight}`"
      class="border-bottom"
    >
      <section
        v-for="(depart, indexDepart) in flight.Segments.Departure"
        :key="`segment-${indexDepart}`"
        class="departure"
      >
        <!-- title -->
        <div v-if="indexDepart === 0" class="title">
          {{ indexFlight === 0 ? t("departure") : t("return") }}
        </div>

        <!-- Transit -->
        <div v-if="indexDepart !== 0" class="transit">
          {{
            t("transit_in", {
              time: depart.TransitTime,
              place: depart.OriginCityName,
              code: depart.Origin,
            })
          }}
        </div>

        <div class="airlines">
          <div class="img-airline">
            <img :src="depart.AirlineImageUrl" />
          </div>
          <div class="name-airline">
            <div>{{ depart.AirlineName }}</div>
            <span>
              {{ depart.ClassCategory }}
              (Subclass {{ depart.ClassCode }})
            </span>
          </div>
        </div>
        <div class="schedule">
          <div class="icon">
            <img src="/modal-detail/estimat.svg" />
          </div>
          <div class="time-airport">
            <div class="takeoff">
              <div class="time-date">
                <div class="time">{{ depart.DepartTime }}</div>
                <div class="date">{{ toDateMonth(depart.DepartDate) }}</div>
              </div>
              <div class="airport">
                <div class="city">
                  {{ depart.OriginCityName }} ({{ depart.Origin }})
                </div>
                <span class="place">{{ depart.OriginName }}</span>
              </div>
            </div>
            <div class="estimation">{{ depart.FlightTime }}</div>
            <div class="landing">
              <div class="time-date">
                <div class="time">{{ depart.ArriveTime }}</div>
                <div class="date">{{ toDateMonth(depart.ArriveDate) }}</div>
              </div>
              <div class="airport">
                <div class="city">
                  {{ depart.DestinationCityName }} ({{ depart.Destination }})
                </div>
                <span class="place">{{ depart.DestinationName }}</span>
              </div>
            </div>
          </div>
        </div>
        <div class="luggage">
          <div class="icon">
            <img src="/modal-detail/luggage.svg" />
          </div>
          <div class="capacity">{{ depart.BaggageWording }}</div>
        </div>
      </section>
    </div>

    <section
      v-for="(flight, indexFlight) in flightSegments"
      :key="`flight-${indexFlight}`"
      class="price border-bottom"
    >
      <div class="price__title">
        {{ indexFlight === 0 ? t("price_departure") : t("price_return") }}
      </div>
      <div
        v-for="(price, indexPrice) in flight.FareDetail.Details"
        class="price__content"
      >
        <div>{{ price.Text }}</div>
        <div>{{ toIDR(price.ForeignAmount) }}</div>
      </div>
    </section>

    <section class="total">
      <div class="total__title">Total</div>
      <div class="total__price">{{toIDR(total)}}</div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { toDateMonth, toIDR } from '../../../utils';
import { Segment as ISegment } from './type-booking-detail-mobile';

interface Props {
  flightSegments: ISegment[],
  t: Function,
}
const { flightSegments, t } = defineProps<Props>();

const total = computed(() => {
  const [departureFLights, returnFlights] = flightSegments;
  if (!returnFlights) return departureFLights.FareDetail.Total;
  return departureFLights.FareDetail.Total + returnFlights.FareDetail.Total;
});
</script>

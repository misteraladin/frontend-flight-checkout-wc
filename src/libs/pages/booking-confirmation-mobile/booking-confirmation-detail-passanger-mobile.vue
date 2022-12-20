<template>
  <div class="detail-passanger">
    <div class="title">{{ title }}</div>
    <div
      v-for="(passenger, index) in sortedPassengers(passengers)"
      :key="index"
      class="passanger"
    >
      <div class="title-passanger">
        <span class="number">{{ index + 1 }}. </span>
        <span class="name-passanger">
          {{ passenger.Title }}
          {{ passenger.FirstName }}
          {{ passenger.LastName }}
        </span>
      </div>
      <div class="luggage">
        <span> <img src="/booking-confirmation/luggage.svg" /></span>
        <span class="text-luggage">Maks bagasi terdaftar 20 Kg</span>
        <!-- Still hardcode -->
      </div>
      <hr />
    </div>
  </div>
</template>

<script setup lang="ts">
import { Pax as IPassanger } from "./type";
import { sortedPassengers } from "../../../utils/flight"

interface Props {
  title: string;
  passengers: IPassanger[];
}
const { title, passengers } = defineProps<Props>();
</script>

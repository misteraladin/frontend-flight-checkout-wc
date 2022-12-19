<template>
  <div class="detail-passanger">
    <div class="title">{{ title }}</div>
    <div
      v-for="(type, typeIndex) in sortPassengers"
      :key="typeIndex"
      class="passanger"
    >
      <div
        v-for="(passenger, passengerIndex) in type"
        :key="`passenger_${typeIndex}_${typeIndex}`"
        class="passanger"
      >
        <div class="title-passanger">
          <span class="number">{{ passengerIndex + 1 }}. </span>
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
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { Pax as IPassanger } from "./type";

interface Props {
  title: string;
  passengers: IPassanger[];
}
const { title, passengers } = defineProps<Props>();

const adults = computed(() =>
  passengers.filter(
    (passenger) => passenger.Type === "Dewasa" || passenger.Type === "Adult"
  )
);
const childs = computed(() =>
  passengers.filter(
    (passenger) => passenger.Type === "Anak" || passenger.Type === "Child"
  )
);
const babies = computed(() =>
  passengers.filter(
    (passenger) => passenger.Type === "Bayi" || passenger.Type === "Infant"
  )
);
const sortPassengers: any = computed(() => {
  return [[...adults.value, ...childs.value], [...babies.value]];
});
</script>

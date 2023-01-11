<template>
  <div class="ma-card-blog" :class="{ 'is-small': isSmall }">
    <img :src="data.image" :alt="data.title" />
    <div class="ma-card-blog__content">
      <div class="ma-card-blog__header">
        {{ data.title }}
      </div>
      <div class="ma-card-blog__footer">
        <div>{{ data.category }}</div>
        <div>{{ data.date }}</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive } from "vue";
import {
  RootObject as IRootObject
} from "./type-card-blog";

const props = defineProps({
  data: {
    type: String,
    required: true,
  },

  isSmall: {
    type: Boolean,
    default: false,
  },
});

const data: IRootObject = reactive(props.data ? JSON.parse(props.data) : null);

const emit = defineEmits(["to"]);
const handleRedirect = () => emit("to");
</script>

<style lang="scss" scoped>
@use "@/styles/molecules/card-blog";
</style>

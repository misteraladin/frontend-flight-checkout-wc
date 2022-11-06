<script lang="ts" setup>
import { reactive } from "vue";

const props = defineProps({
  data: {
    type: String,
    required: true,
  },

  small: {
    type: Boolean,
    default: false,
  },
});

interface IBrand {
  id: number;
  sequence: number;
  logo: string;
  name: string;
  url: string;
}

const brand: IBrand = reactive(props.data ? JSON.parse(props.data) : null);
</script>

<template>
  <a :href="brand.url" class="brand-item">
    <div class="brand-image-wrapper">
      <img :src="brand.logo" :alt="brand.name" />
    </div>

    <div class="brand-name">
      {{ brand.name }}
    </div>
  </a>
</template>

<style lang="scss">
@use "@/styles/molecules/card-brand";
</style>

<template>
  <a
    :class="classes"
    :href="props.url"
    target="_blank"
  >
    <div class="btn-content">
      <slot name="icon" />

      <div div class="btn-text">
        <span class="btn-title"><slot /></span>
        <div class="btn-subtitle">
          <slot name="subtitle" />
        </div>
      </div>
    </div>

    <div class="btn-arrow" :class="{ 'is-small': small }">
      <img :src="ChevronRight" />
    </div>
  </a>
</template>

<style lang="scss">
@use "@/styles/atoms/button-fancy";
</style>

<script setup lang="ts">
import { ButtonHTMLAttributes, computed } from 'vue';
import ChevronRight from './chevron-right.svg';

interface Props extends ButtonHTMLAttributes {
  small?: boolean;
  customClass?: string;
  url?: string;
}

//accepted props
const props = defineProps<Props>();

//computed variables
const classes = computed(() => [
  'btn-nav',
  {
    'btn-small': props.small,
  },
  props.customClass,
]);
</script>

<style lang="scss" >
@use "@/styles/atoms/button-fancy";
</style>
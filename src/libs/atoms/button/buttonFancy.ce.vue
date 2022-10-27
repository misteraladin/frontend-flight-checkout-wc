<template>
  <a
    :class="classes"
    :href="props.url"
    target="_blank"
    @click="handleClick"
  >
    <div class="btn-content">
      <slot name="icon" />

      <div>
        <span class="btn-title"><slot /></span>
        <div class="btn-subtitle">
          <slot name="subtitle" />
        </div>
      </div>
    </div>

    <div class="btn-arrow">
      <img :src="ChevronRight" />
    </div>
  </a>
</template>

<style lang="scss">
@use "@/styles/atoms/fancy";
</style>

<script setup lang="ts">
import { ButtonHTMLAttributes, computed, ref } from 'vue';
import ChevronRight from './chevron-right.svg';

interface Props extends ButtonHTMLAttributes {
  small?: boolean;
  arrow?: boolean;
  customClass?: string;
  url?: string;
}

//accepted props
const props = defineProps<Props>();

//local variable
const showArrowSlot = ref(true);
const showIconSlot = ref(false);

//computed variables
const classes = computed(() => [
  'btn-nav',
  {
    'btn-small': props.small,
  },
  props.customClass,
]);

//methods
//define emit
const emit = defineEmits(['click']);

const handleClick = (event: MouseEvent) => {
  emit('click', event);
};
</script>

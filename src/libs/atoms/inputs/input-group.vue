<template>
  <div class="ma-input-group">
    <!-- <div class="ma-input-group__prepend"> -->
    <label :for="label" v-if="label">{{ label }}</label>
    <div class="group">
      <div class="group__prepend" v-if="$slots.prepend">
        <slot name="prepend" />
      </div>
      <slot />
      <slot name="append" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { HTMLAttributes } from 'vue';

interface Props extends HTMLAttributes {
  label?: string;
}

const { label } = defineProps<Props>();
</script>

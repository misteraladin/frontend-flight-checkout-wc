<template>
  <section :class="['card', { 'card-alternate': alternate }]">
    <div class="card__header" v-if="$slots.header">
      <slot name="header" />
    </div>
    <slot />
  </section>
</template>

<script setup lang="ts">
import { HTMLAttributes } from 'vue';

interface Props extends HTMLAttributes {
  alternate?: boolean;
}
const { alternate } = defineProps<Props>();
</script>

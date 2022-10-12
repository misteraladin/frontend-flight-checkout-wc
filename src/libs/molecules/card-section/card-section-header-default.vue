<template>
  <div class="ma-card-section__header-default">
    <h1 v-if="data.name" class="default">
      {{ data.name }}
    </h1>
  </div>
</template>

<script setup lang="ts">
import { reactive } from "vue";

const props = defineProps({
  data: {
    type: Object,
    required: true,
  },
});

const { data } = reactive(props);
</script>

<template>
  <div
    class="ma-card-promo"
    :class="{ 'is-small': isSmall }"
    @click="handleClick"
  >
    <img :alt="data.description" :src="data.image_url" />
    <div class="ma-card-promo__text-wrapper">
      <label>
        {{ data.title }}
      </label>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive } from "vue";
import { RootObject as IRootObject } from "./type-card-promo";

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

const emit = defineEmits(['click']);
const handleClick = (event: MouseEvent) => {
  emit('click', event);

  console.log('should open new tab to detailed promo');
  
};

</script>

<style lang="scss" scoped>
@use "@/styles/molecules/card-promo";
</style>

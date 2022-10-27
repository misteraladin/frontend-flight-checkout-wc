<template>
  <div class="ma-carousel">
    <ElCarousel trigger="click" :arrow="arrow || 'always'" :interval="interval">
      <ElCarouselItem v-for="(each, index) in data" :key="index" @click="handleClick">
        <img :src="each.image_url" :alt="each.description" />
      </ElCarouselItem>
    </ElCarousel>
  </div>
</template>

<script setup lang="ts">
import { ElCarousel, ElCarouselItem } from "element-plus";
import { RootObject as IRootObject } from "./types";

const props = defineProps({
  data: {
    type: String,
    required: true,
  },

  interval: {
    type: Number,
    default: 3000,
  },

  arrow: {
    type: String,
    default: "always",
  },

  isSmall: {
    type: Boolean,
    default: false,
  },
});

const data: Array<IRootObject> = props.data ? JSON.parse(props.data) : null;

const emit = defineEmits(["click"]);
const handleClick = (event: MouseEvent) => {
  emit("click", event);

  console.log("should open new tab to detailed banner");
};
</script>

<style lang="scss">
@use "@/styles/atoms/carousel";
</style>

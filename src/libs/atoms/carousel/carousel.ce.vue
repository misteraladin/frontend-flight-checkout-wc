<template>
  <div class="ma-carousel">
    <ElCarousel trigger="click" :arrow="carouselArrow" :interval="props.interval">
      <ElCarouselItem v-for="(item, index) in items" :key="index" @click="handleClick">
        <img :src="item.image_url" :alt="item.description" />
      </ElCarouselItem>
    </ElCarousel>
  </div>
</template>

<script setup lang="ts">
import { ElCarousel, ElCarouselItem } from "element-plus";
import { RootObject as IRootObject } from "./types-carousel";

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

const items: Array<IRootObject> = props.data ? JSON.parse(props.data) : null;

const carouselArrow: any = props.arrow;

const emit = defineEmits(["click"]);
const handleClick = (event: MouseEvent) => {
  emit("click", event);

  console.log("should open new tab to detailed banner");
};
</script>

<style lang="scss">
@use "@/styles/atoms/carousel";
</style>

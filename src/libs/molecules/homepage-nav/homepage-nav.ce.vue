<script setup lang="ts">
const props = defineProps({
  title: {
    type: String,
    default: 'Mau liburan atau belanja?',
  },
  subtitle: {
    type: String,
    default:'Cobain semua keseruan di Mister Aladin',
  },
  backgroundUrl: {
    type: String,
    default: '/homepage/bg-desktop.png',
  },
  artworkUrl: {
    type: String,
    default: '/homepage/artwork.png',
  },
});
</script>

<style lang="scss" scoope>
@use "@/styles/molecules/homepage-nav";
</style>

<template>
  <div class="ma-homepage-nav"
    :style="{ backgroundImage: `url(${backgroundUrl})` }"
    >
      <div>
        <h2>{{ title }}</h2>
        <p>{{ subtitle}}</p>

      <div class="btn-wrapper">
        <slot></slot>
      </div>
    </div>

    <div>
      <img :src="artworkUrl" :alt="title">
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, computed } from "vue";
import { useI18n } from 'vue-i18n';
import messages from './lang-homepage-navigation';
import ButtonFancy from '@/libs/atoms/button/buttonFancy.ce.vue';

const { t } = useI18n({ messages });

const props = defineProps({
  title: {
    type: String,
    required: false,
    default: () => ('title'),
  },
  subtitle: {
    type: String,
    required: false,
    default: () => ('subtitle'),
  },
  aladinTravelTitle: {
    type: String,
    required: false,
    default: () => ('aladinTravelTitle'),
  },
  aladinTravelTag: {
    type: String,
    required: false,
    default: () => ('aladinTravelTag'),
  },
  aladinMallTitle: {
    type: String,
    required: false,
    default: () => ('aladinMallTitle'),
  },
  aladinMallTag: {
    type: String,
    required: false,
    default: () => ('aladinMallTag'),
  },
  backgroundUrl: {
    type: String,
    required: false,
    default: '/bg.png',
  },
  artworkUrl: {
    type: String,
    required: false,
    default: '/homepage-nav-artwork.png',
  },
  mallIconUrl: {
    type: String,
    required: false,
    default: '/icon-aladin-mall.png',
  },
  travelIconUrl: {
    type: String,
    required: false,
    default: '/icon-aladin-travel.png',
  },
});
</script>

<style lang="scss" scoope>
@use "@/styles/partials/homepage-navigation/homepage-navigation";
</style>

<style lang="scss" >
@use "@/styles/atoms/fancy";
</style>

<template>
  <div class="ma-homepage-nav"
    :style="{ backgroundImage: `url(${backgroundUrl})` }"
    >
      <div>
        <h2>{{ t('title') }}</h2>
        <p>{{ t('subtitle')}}</p>

      <div class="btn-wrapper">
        <ButtonFancy custom-class="btn-travel" url="https://www.misteraladin.com/">
          {{ t('aladinTravelTitle') }}
          <template #subtitle>{{ t('aladinTravelTag') }}</template>
          <template #icon>
            <img src="travelIconUrl" alt="AladinTravel" class="btn-icon">
          </template>
        </ButtonFancy>

        <ButtonFancy custom-class="btn-mall" url="https://aladinmall.misteraladin.com/">
          {{ t('aladinMallTitle') }}
          <template #subtitle>{{ t('aladinMallTag') }}</template>
          <template #icon>
            <img src="mallIconUrl" alt="AladinTravel" class="btn-icon">
          </template>
        </ButtonFancy>
      </div>
    </div>

    <div>
      <img src="artworkUrl" alt="">
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, computed } from "vue";
import { useI18n } from 'vue-i18n';
import messages from './lang-homepage-navigation';
import ButtonFancy from '../../atoms/button/buttonFancy.ce.vue';

const { t } = useI18n({ messages });
</script>

<style lang="scss" scoope>
@use "@/styles/partials/homepage-navigation/homepage-navigation";
</style>

<style lang="scss" >
@use "@/styles/atoms/fancy";
</style>

<template>
  <div class="ma-homepage-nav">
    <div>
      <h2>{{ t('title') }}</h2>
      <p>{{ t('subtitle')}}</p>

      <div class="btn-wrapper">
        <ButtonFancy custom-class="btn-travel" url="https://www.misteraladin.com/">
          {{ t('aladinTravelTitle') }}
          <template #subtitle>{{ t('aladinTravelTag') }}</template>
          <template #icon>
            <img src="/icon-aladin-travel.png" alt="AladinTravel" class="btn-icon">
          </template>
        </ButtonFancy>

        <ButtonFancy custom-class="btn-mall" url="https://aladinmall.misteraladin.com/">
          {{ t('aladinMallTitle') }}
          <template #subtitle>{{ t('aladinMallTag') }}</template>
          <template #icon>
            <img src="/icon-aladin-mall.png" alt="AladinTravel" class="btn-icon">
          </template>
        </ButtonFancy>
      </div>
    </div>

    <div>
      <img src="/homepage-nav-artwork.png" alt="">
    </div>
  </div>
</template>

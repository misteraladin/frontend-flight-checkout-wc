<script lang="ts" setup>
import { reactive, computed } from "vue";
import { RootObject as IRootObject } from "./interface";
import PartnerCard from '../../atoms/cards/partner-card.vue';
import BRAND_DATA from '../../../../data/brands.json';

const INITIAL_DATA = {
  title: '',
  contents: []
};

const data:IRootObject = reactive(BRAND_DATA.data[0] || INITIAL_DATA);

const showContent = computed<boolean>(() => data.contents.length > 0);

const sortedBrands = computed(() => {
  const type = 'travel';
  const dataTravel = [...BRAND_DATA.data[0].contents];
  const dataBrand = dataTravel.find((item) => item.type === type);
  const result = dataBrand.brands.sort((a, b) => b.sequence - a.sequence);
  return {...dataBrand, brands: result.slice(0, 6) };
});
</script>

<style lang="scss">
@use "@/styles/molecules/homepage-partners";
</style>

<template>
  <div v-if="showContent" class="homepage-partner">
    <h2>{{ data.title }}</h2>

    <div v-for="item in data.contents" :key="item.type" class="brand-products" :class="item.type">
      <div v-if="item.brands.length > 0">
        <h3>{{ item.title }}</h3>

        <div class="brand-wrapper">
          <PartnerCard
            v-for="brand in item.brands?.slice(0, 6)"
            :key="brand.id"
            :url="brand.url"
            :name="brand.name"
            :logo="brand.logo"
          />
        </div>
      </div>
    </div>

    <h3>{{ sortedBrands.title }}</h3>
    <div class="brand-wrapper">
      <PartnerCard
        v-for="brand in sortedBrands.brands"
        :key="brand.id"
        :url="brand.url"
        :name="brand.name"
        :logo="brand.logo"
      />
    </div>
  </div>
</template>

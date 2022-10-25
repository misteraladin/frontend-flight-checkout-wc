<template>
  <div class="ma-card-mall" :class="{ 'is-small': isSmall }" :style="styleCard">
    <div class="ma-card-mall__header">
      <div class="ma-card-mall__thumbnail">
        <img
          :src="data.image.url"
          :alt="data.image.label"
          class="ma-card-mall__image"
          loading="lazy"
        />
        <div v-if="!data.only_x_left_in_stock" class="ma-card-mall__label-sold-out">
          <span>{{ t('sold_out') }}</span>
        </div>
      </div>
    </div>

    <div class="ma-card-mall__body">
      <div class="ma-card-mall__body-top">

        <!-- title and star -->
        <div class="ma-card-mall__title">
          <div class="ma-card-mall__text">
            {{ data.name }}
          </div>
        </div>
        
      </div>

      <div class="ma-card-mall__body-bottom" :style="styleBodyBottom">
        <div class="ma-card-mall__price">
          <div v-if="price.final_price" class="ma-card-mall__price-special">
            Rp{{ digitGrouping(price.final_price.value) }}
          </div>
          <div v-if="price.discount" class="ma-card-mall__price-original">
            <div class="ma-card-mall__discount-percent">
              {{ discount }}%
            </div>
            <div class="ma-card-mall__price-normal">
              Rp{{ digitGrouping(price.discount.amount_off) }}
            </div>
          </div>
        </div>
      </div>

      <!-- official store -->
      <div class="ma-card-mall__official-store">
        <img src="/icons/official-store.svg" alt="logo-official-store" />
        <div class="ma-card-mall__official-store-name">
          Zeus
        </div>
      </div>

      <!-- sale amount -->
      <div v-if="flashsale" class="ma-card-mall__sale-amount">
        <div class="progress">
          <div class="progress-bar"
            :style="{ width: `${calcStock(data.available_stock, data.only_x_left_in_stock)}%` }"
            role="progressbar"
            :aria-valuenow="calcStock(data.available_stock, data.only_x_left_in_stock)"
            aria-valuemin="0"
            aria-valuemax="100" />
        </div>

        <div v-if="!data.only_x_left_in_stock" class="ma-card-mall__room-alert">
          {{ t('out_of_stock') }}
        </div>
        <div v-else class="ma-card-mall__sale-amount-value">{{ fixedStock(data.only_x_left_in_stock) }} {{ t('left') }}</div>
      </div>
    </div>

    <a
      :href="mallUrl"
      :title="data.name"
      class="ma-card-mall__link"
    />
  </div>
</template>

<script setup lang="ts">
import { reactive, computed } from "vue";
import {
  RootObject as IRootObject,
  IPrice as IPrice
} from "./type-card-mall";
import { useI18n } from 'vue-i18n';
import messages from './lang-card-mall';

const props = defineProps({
  data: {
    type: String,
    required: true,
  },

  isSmall: {
    type: Boolean,
    default: false,
  },

  flashsale: {
    type: Boolean,
    default: false,
  }
});

const { t } = useI18n({
  messages,
});

const data: IRootObject = reactive(props.data ? JSON.parse(props.data) : null);

// price
const styleBodyBottom = computed<any>(() => ({
  justifyContent: data.price_range ? 'space-between' : 'flex-end'
}))

const styleCard = computed<any>(() => ({
  minHeight: props.flashsale && '22.5rem'
}))

const price: IPrice = reactive(data.price_range.minimum_price);

const discount = computed<number>(() => {
  const { discount } = price;
  if (discount) {
    return Math.round(discount.percent_off);
  }
  return 0;
});

const digitGrouping = (num: number): String => num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');

const calcStock = (availableStock: number, leftInStock: number) => {
  const total = (leftInStock/availableStock) * 100;
  return Math.round(total);
}

const fixedStock = (leftInStock: number) => {
  return Number.isInteger(leftInStock) ? leftInStock : leftInStock.toFixed(1);
}

// mall redirect url
const getQueryParams = () => {
  const urlSearchParams = new URLSearchParams(window.location.search);
  const params = Object.fromEntries(urlSearchParams.entries());
  return new URLSearchParams(params).toString();
}

const mallUrl = computed<string>(() => {
  const { id, slug, area } = data;
  if (!area) return '';

  const countryName = area.city.state.country.slug;
  const cityName = area.city.slug;
  const areaName = area.slug;
  const query = getQueryParams() ? `?${getQueryParams()}` : '';

  return `/mall/${countryName}/${cityName}/${areaName}/${slug}/${id}${query}`;
});
</script>

<style lang="scss" scoped>
@use "@/styles/molecules/card-mall";
</style>

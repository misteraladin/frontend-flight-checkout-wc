<template>
  <div class="ma-card-mall" :class="{ 'is-small': isSmall }">
    <div class="ma-card-mall__body">
      <div class="ma-card-mall__thumbnail">
        <img
          :src="data.image.url"
          :alt="data.image.label"
          class="ma-card-mall__image"
          loading="lazy"
        />
        <div v-if="!data.available_stock" class="ma-card-mall__label-sold-out">
          <span>{{ t('sold_out') }}</span>
        </div>
      </div>

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
          <div v-if="totalPrice" class="ma-card-mall__price-special">
            {{ totalPrice }}
          </div>
          <div v-if="minPrice.discount" class="ma-card-mall__price-original">
            <div class="ma-card-mall__discount-percent">
              {{ percentOff }}%
            </div>
            <div class="ma-card-mall__price-normal">
              Rp{{ digitGrouping(minPrice.discount.amount_off) }}
            </div>
          </div>
        </div>
      </div>

      <!-- official store -->
      <div class="ma-card-mall__official-store">
        <img 
          v-if="+store.is_premium"
          src="/icons/official-store.svg" 
          alt="logo-official-store"
        />
        <div class="ma-card-mall__official-store-name">
          {{ store.store_name }}
        </div>
      </div>
    </div>

    <!-- sale amount -->
    <div v-if="flashsale" class="ma-card-mall__footer">
      <div v-if="!data.available_stock" class="ma-card-mall__room-alert">
        {{ t('out_of_stock') }}
      </div>
      <div v-else class="ma-card-mall__sale-amount-value">
        {{ fixedStock(data.available_stock) }} {{ t('left') }}
      </div>
    </div>

    <a
      :href="data.url_key"
      :title="data.name"
      class="ma-card-mall__link"
    />
  </div>
</template>

<script setup lang="ts">
import { reactive, computed } from "vue";
import {
  RootObject as IRootObject,
  IPrice as IPrice,
  StoreInfo as IStoreInfo,
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

const store: IStoreInfo = reactive(data.store_info);

// price
const styleBodyBottom = computed<any>(() => ({
  justifyContent: data.price_range ? 'space-between' : 'flex-end'
}))

const minPrice: IPrice = reactive(data.price_range.minimum_price);

const percentOff = computed<number>(() => Math.round(minPrice.discount.percent_off));

const totalPrice = computed(() => {
  const { minimum_price: minimumPrice, maximum_price: maximumPrice } = data.price_range;
  const min = minimumPrice?.final_price?.value;
  const max = maximumPrice?.final_price?.value;

  return min < max 
    ? `Rp${digitGrouping(min)} - Rp${digitGrouping(max)}`
    : `Rp${digitGrouping(min)}`;
});

const digitGrouping = (num: number): String => num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');

const fixedStock = (leftInStock: number) => {
  return Number.isInteger(leftInStock) ? leftInStock : leftInStock.toFixed(1);
}
</script>

<style lang="scss" scoped>
@use "@/styles/molecules/card-mall";
</style>

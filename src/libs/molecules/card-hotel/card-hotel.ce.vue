<template>
  <div class="ma-card-hotel" :class="{ 'is-small': isSmall }">
    <div class="ma-card-hotel__header">
      <div v-if="dynamicBadges.length" class="ma-card-hotel-badge">
        <img
          v-for="(badge, index) in dynamicBadges"
          :key="`${index}-${badge.name}`"
          :src="badge.image"
          :alt="badge.description"
          :title="badge.description"
          loading="lazy"
          class="ma-card-hotel-badge__img"
        />
      </div>

      <div class="ma-card-hotel-favorite" @click="handleFavorite">♥️</div>

      <div v-if="data?.review?.score > 0" class="ma-card-hotel-rating">
        <span class="ma-card-hotel-rating-icon" :class="getRatingClasses(data?.review?.score)" />
        <span class="ma-card-hotel-rating-rate">{{ data?.review?.score }}</span>
        <span class="ma-card-hotel-rating-label">{{ data?.review?.description }}</span> 
      </div>

      <div class="ma-card-hotel__thumbnail">
        <img
          :src="data.original_image_url_resized"
          :alt="data.name"
          class="ma-card-hotel__image"
          loading="lazy"
        />
      </div>
    </div>

    <div class="ma-card-hotel__body">
      <div class="ma-card-hotel__body-top">
        <!-- top badge -->
        <div v-if="topBadges.length" class="ma-card-hotel__top-badge-container">
          <div class="ma-popover"
            v-for="(badge, index) in topBadges"
            :key="`${index}-${badge.name}`"
          >
            <div
              class="ma-card-hotel__top-badge"
              :style="{
                color: badge.text_color,
                backgroundColor: badge.background_color
              }"
            >
              <img
                :src="badge.icon"
                :alt="badge.name"
                class="ma-card-hotel__top-badge-icon"
              >
              <div class="ma-card-hotel__top-badge-text">{{ badge.title }}</div>
            </div>

            <div class="ma-popover__content">
              {{ badge.description }}
            </div>
          </div>
        </div>

        <!-- title and star -->
        <div class="ma-card-hotel__title">
          <div class="ma-card-hotel__text">
            {{ data.name }}
          </div>

          <!-- star rating -->
          <svg
            class="ma-star-sprite"
            width="0"
            height="0"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
          >
            <symbol id="star" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 15">
              <path
                d="M7.69092 12.0773C7.91337 11.943 8.19189 11.943 8.41434 12.0773L11.8365 14.1428C12.3667 14.4627 13.0206 13.9874 12.88 13.3844L11.9718 9.49146C11.9127 9.23841 11.9987 8.97349 12.1951 8.80335L15.2197 6.18316C15.6877 5.77772 15.4375 5.00894 14.8205 4.95659L10.8396 4.61884C10.5808 4.59689 10.3555 4.43356 10.2542 4.19451L8.69713 0.520658C8.45592 -0.0484614 7.64934 -0.0484614 7.40813 0.520658L5.85103 4.19451C5.74972 4.43356 5.52441 4.59689 5.26571 4.61884L1.28472 4.95659C0.667718 5.00894 0.417534 5.77772 0.885552 6.18316L3.91013 8.80335C4.10652 8.97349 4.19252 9.23841 4.13348 9.49146L3.22531 13.3844C3.08464 13.9874 3.7386 14.4627 4.26872 14.1428L7.69092 12.0773Z"
              />
            </symbol>
          </svg>
        </div>

        <div class="ma-card-hotel-star-location">
          <span v-if="data.star_rating" class="ma-star-wrapper">
          <span
            v-for="i in Math.floor(data.star_rating)"
            :key="i"
            class="ma-star"
          >
            <svg width="16" height="16">
              <use xlink:href="#star"></use>
            </svg>
          </span>
        </span>

        <!-- location -->
        <div class="ma-card-hotel__location">
          {{ data.area.name }},
          {{ data.area.city.name }}
        </div>
        </div>
      </div>

      <div class="ma-card-hotel__body-bottom" :style="styleBodyBottom">
        <div v-if="data.cheapest_room" class="ma-card-hotel__room-alert">
          {{ allotmentRemain }}
        </div>

        <div v-if="data.cheapest_room" class="ma-card-hotel__price">
          <div v-if="price.gimmick" class="ma-card-hotel__price-original">
            <div class="ma-card-hotel__price-normal">
              Rp{{ digitGrouping(price.gimmick) }}
            </div>
            <div class="ma-card-hotel__discount-percent">
              {{ discount }}%
            </div>
          </div>
          <div v-if="price.total" class="ma-card-hotel__price-special">
            Rp{{ digitGrouping(price.total) }}
          </div>
        </div>

        <div v-if="!data.cheapest_room" class="ma-card-hotel__room-alert">
          {{ t('room_empty') }}
        </div>
      </div>
    </div>

    <a
      :href="hotelUrl"
      :title="data.name"
      class="ma-card-hotel__link"
    />
  </div>
</template>

<script setup lang="ts">
import { reactive, computed } from "vue";
import {
  RootObject as IRootObject,
  Badge as IBadge,
  Rate as IRate
} from "./type-card-hotel";
import { useI18n } from 'vue-i18n';
import messages from './lang-card-hotel';

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

const { t } = useI18n({
  messages,
});

const data: IRootObject = reactive(props.data ? JSON.parse(props.data) : null);

// dynamic badges
const dynamicBadges = computed(() =>
  data.badges.length > 0 && data.badges.filter(({ name }: IBadge) => name === "dynamic_badge")
);

// top badges
const topBadges = computed(() =>
  data.badges.length > 0 && data.badges.filter(({ name }: IBadge) => name === "dynamic_badge_hover_top")
);

// price
const styleBodyBottom = computed<any>(() => ({
  justifyContent: data.cheapest_room ? 'space-between' : 'flex-end'
}))

const price: IRate = reactive(data.cheapest_room && data.cheapest_room.rate);

const discount = computed<number>(() => {
  const { gimmick, total } = price;
  if (gimmick && total) {
    return Math.round(((total - gimmick) / total) * 100);
  }
  return 0;
});

const digitGrouping = (num: number): String => num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');

// allotment
const allotmentRemain = computed<string>(() => (price.allotment < 6
  ? t('room_remain', { total: price.allotment })
  : ''))

// hotel redirect url
const getQueryParams = () => {
  const urlSearchParams = new URLSearchParams(window.location.search);
  const params = Object.fromEntries(urlSearchParams.entries());
  return new URLSearchParams(params).toString();
}

const hotelUrl = computed<string>(() => {
  const { id, slug, area } = data;
  if (!area) return '';

  const countryName = area.city.state.country.slug;
  const cityName = area.city.slug;
  const areaName = area.slug;
  const query = getQueryParams() ? `?${getQueryParams()}` : '';

  return `/hotel/${countryName}/${cityName}/${areaName}/${slug}/${id}${query}`;
});

const getRatingClasses = (rate: number): String => {
  const rateInt = parseFloat(rate.toString());
  if (rateInt < 2.99) return 'rate-1';
  if (rateInt < 5.99) return 'rate-2';
  if (rateInt < 7.99) return 'rate-3';
  if (rateInt < 8.99) return 'rate-4';
  return 'rate-5';
};

const handleFavorite = () => {
  console.log('Favorite clicked!');
};
</script>

<style lang="scss" scoped>
@use "@/styles/molecules/card-hotel";
</style>

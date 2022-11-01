<template>
  <div class="ma-card-explore" :class="{ 'is-small': isSmall }">
    <div class="ma-card-explore__header">
      <div v-if="dynamicBadges.length" class="ma-card-explore-badge">
        <img
          v-for="(badge, index) in dynamicBadges"
          :key="`${index}-${badge.name}`"
          :src="badge.image"
          :alt="badge.description"
          :title="badge.description"
          loading="lazy"
          class="ma-card-explore-badge__img"
        />
      </div>

      <div class="ma-card-explore__thumbnail">
        <img
          :src="data.image_url"
          :alt="data.name"
          class="ma-card-explore__image"
          loading="lazy"
        />
      </div>
    </div>

    <div class="ma-card-explore__body">
      <div class="ma-card-explore__body-top">
        <!-- top badge -->
        <div v-if="topBadges.length" class="ma-card-explore__top-badge-container">
          <div class="ma-popover"
            v-for="(badge, index) in topBadges"
            :key="`${index}-${badge.name}`"
          >
            <div
              class="ma-card-explore__top-badge"
              :style="{
                color: badge.text_color,
                backgroundColor: badge.background_color
              }"
            >
              <img
                :src="badge.icon"
                :alt="badge.name"
                class="ma-card-explore__top-badge-icon"
              >
              <div class="ma-card-explore__top-badge-text">{{ badge.title }}</div>
            </div>

            <div class="ma-popover__content">
              {{ badge.description }}
            </div>
          </div>
        </div>

        <!-- title and star -->
        <div class="ma-card-explore__title">
          <div class="ma-card-explore__text">
            {{ data.name }}
          </div>
        </div>

        <!-- location -->
        <div class="ma-card-explore__location">
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M6.07786 9.90368C8.02595 7.487 9 5.77552 9 4.76923C9 3.23983 7.65685 2 6 2C4.34315 2 3 3.23983 3 4.76923C3 5.77552 3.97405 7.487 5.92214 9.90368L5.92214 9.90368C5.9568 9.94668 6.01976 9.95344 6.06276 9.91878C6.06832 9.9143 6.07338 9.90924 6.07786 9.90368Z"
              stroke="#1C1C1C"
              stroke-width="0.7"
            />
            <path
              d="M5.96875 6C6.52103 6 6.96875 5.55228 6.96875 5C6.96875 4.44772 6.52103 4 5.96875 4C5.41646 4 4.96875 4.44772 4.96875 5C4.96875 5.55228 5.41646 6 5.96875 6Z"
              stroke="#1C1C1C"
              stroke-width="0.7"
            />
          </svg>

          {{ location }}
        </div>
      </div>

      <div class="ma-card-explore__body-bottom" :style="styleBodyBottom">
        <div v-if="data.highest_price" class="ma-card-explore__room-alert"></div>

        <div class="ma-card-explore__price">
          <div v-if="data.highest_gimmick_price" class="ma-card-explore__price-original">
            <div class="ma-card-explore__price-normal">
              Rp{{ digitGrouping(data.highest_gimmick_price) }}
            </div>
            <div class="ma-card-explore__discount-percent">
              {{ discount }}%
            </div>
          </div>
          <div v-if="data.highest_price" class="ma-card-explore__price-special">
            Rp{{ digitGrouping(data.highest_price) }}
          </div>
        </div>

        <!-- <div v-if="!data.cheapest_room" class="ma-card-explore__room-alert">
          {{ t('room_empty') }}
        </div> -->
      </div>
    </div>

    <!-- <a
      :href="exploreUrl"
      :title="data.name"
      class="ma-card-explore__link"
    /> -->
  </div>
</template>

<script setup lang="ts">
import { reactive, computed } from "vue";
import {
  RootObject as IRootObject,
  Badge as IBadge,
  Destination as IDestination,
} from "./type-card-explore";
import { useI18n } from 'vue-i18n';
import messages from './lang-card-explore';

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
  data.badges.filter(({ name }: IBadge) => name === "dynamic_badge")
);

// top badges
const topBadges = computed(() =>
  data.badges.filter(({ name }: IBadge) => name === "dynamic_badge_hover_top")
);

// price
const styleBodyBottom = computed<any>(() => ({
  justifyContent: data.highest_price ? 'space-between' : 'flex-end'
}))

// location
const location = computed<string>(() => {
  const destination: any[] = [];
  data.destinations.map(({ name }: IDestination) => {
    destination.push(name);
  });
  return destination && destination.join(', ') || '';
});

const discount = computed<number>(() => {
  const { highest_gimmick_price, highest_price } = data;
  if (highest_gimmick_price && highest_price) {
    return Math.round(((highest_price - highest_gimmick_price) / highest_price) * 100);
  }
  return 0;
});

const digitGrouping = (num: number): String => num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');

// hotel redirect url
const getQueryParams = () => {
  const urlSearchParams = new URLSearchParams(window.location.search);
  const params = Object.fromEntries(urlSearchParams.entries());
  return new URLSearchParams(params).toString();
}

// const exploreUrl = computed<string>(() => {
//   const { id, slug, area } = data;
//   if (!area) return '';

//   const countryName = area.city.state.country.slug;
//   const cityName = area.city.slug;
//   const areaName = area.slug;
//   const query = getQueryParams() ? `?${getQueryParams()}` : '';

//   return `/explore/${countryName}/${cityName}/${areaName}/${slug}/${id}${query}`;
// });
</script>

<style lang="scss" scoped>
@use "@/styles/molecules/card-explore";
</style>

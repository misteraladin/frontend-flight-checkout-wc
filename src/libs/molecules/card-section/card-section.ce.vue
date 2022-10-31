<template>
  <div class="ma-card-section">
    <div class="ma-card-section__header">
      <div class="ma-card-section__header-title">
        <component
          :is="componentType"
          :data="data"
          :t="t"
        />
      </div>

      <div class="ma-card-section__header-link">
        <ma-link :to="data.url">
          {{ t('see_all') }}
        </ma-link>

        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_6457_84485)">
            <path
              d="M8.92102 5.58782C8.59638 5.26318 8.07003 5.26318 7.74538 5.58782C7.42099 5.91221 7.4207 6.43807 7.74474 6.76282L10.9749 10L7.74474 13.2372C7.4207 13.5619 7.42099 14.0878 7.74538 14.4122C8.07003 14.7368 8.59638 14.7368 8.92102 14.4122L12.6261 10.7071C13.0166 10.3166 13.0166 9.68342 12.6261 9.29289L8.92102 5.58782Z"
            />
          </g>
          <defs>
            <clipPath id="clip0_6457_84485">
              <rect width="20" height="20" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </div>
    </div>

    <div class="ma-card-section__body" :style="!noimage && styles">
      <div v-if="!noimage" class="ma-card-section__banner">
        <img :src="data.image" :alt="data.name" />
      </div>

      <div class="ma-card-section__product-wrapper" :style="noimage && position">
        <div :class="!noimage ? 'ma-card-section__product' : 'ma-card-section__category'">
          <div class="ma-card-section__product-dummy"></div>
          <slot></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, computed } from "vue";
import CardSectionHeaderFlashsale from "./card-section-header-flahsale.vue";
import CardSectionHeaderDefault from "./card-section-header-default.vue";
import { useI18n } from "vue-i18n";
import messages from "./lang-card-section";

const { t } = useI18n({
  messages,
});

const props = defineProps({
  data: {
    type: String,
    required: true,
  },

  type: {
    type: String,
    default: 'default',
  },

  fullBackground: {
    type: Boolean,
    default: false,
  },

  colorBackground: {
    type: String,
    default: 'linear-gradient(245.81deg, #2F4295 -0.35%, #1B2D76 90.63%)',
  },

  noimage: {
    type: Boolean,
    default: false,
  }
});

const data = reactive(props.data ? JSON.parse(props.data) : null);

const styles = computed<any>(() => {
  return {
    background: props.colorBackground,
    width: props.fullBackground ? 'auto' : '23.75rem',
  };
});

const position = computed<any>(() => {
  return {
    position: 'relative',
  };
});

const componentType = computed(() => {
  const components: any = {
    default: CardSectionHeaderDefault,
    flashsale: CardSectionHeaderFlashsale,
  };

  return components[props.type];
});
</script>

<style lang="scss">
@use "@/styles/molecules/card-section";
</style>

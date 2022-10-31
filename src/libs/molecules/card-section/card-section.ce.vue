<template>
  <div class="ma-card-section">
    <div class="ma-card-section__header">
      <div 
        class="ma-card-section__header-title" 
        :class="{ 'ma-card-section__header-flashsale': countdown }"
      >
        <!-- flashsale -->
        <div v-if="props.countdown" class="flashsale flashsale__icon">
          <img src="/icons/bolt.svg" />
        </div>

        <h1 v-if="props.title" :class="{ big: props.countdown, flashsale: props.countdown }">
          {{ props.title }}
        </h1>

        <div v-if="timeleft" class="flashsale flashsale__countdown">
          <div class="flashsale__countdown-icon">
            <img src="/icons/time.svg" />
          </div>

          <div class="flashsale__countdown-text">
            {{ t("ends_in") }}
          </div>

          <div class="flashsale__countdown-time">
            <span>{{ timeleft }}</span>
          </div>
        </div>
      </div>

      <div 
        v-if="props.url"
        class="ma-card-section__header-link"
      >
        <ma-link :to="props.url" arrow>
          {{ t('see_all') }}
        </ma-link>
      </div>
    </div>

    <div class="ma-card-section__body" :style="styles">
      <div 
        v-if="props.image" 
        class="ma-card-section__banner"
        :class="{ 'd-none': isBannerHide }"
      >
        <img :src="props.image" :alt="props.title" />
      </div>

      <div class="ma-card-section__product">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, computed, onMounted } from "vue";
import { useI18n } from "vue-i18n";

const { t } = useI18n({
  messages: {
    en: {
      ends_in: 'Ends in',
      see_all: 'See All',
    },
    id: {
      ends_in: 'Berakhir dalam',
      see_all: 'Lihat Semua',
    },
  }
});

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  
  // activate flashsale
  countdown: {
    type: String,
    default: '',
  },

  image: {
    type: String,
    required: true,
  },

  url: {
    type: String,
    required: true,
  },

  type: {
    type: String,
    default: 'default',
  },

  backgroundColor: {
    type: String,
    default: '',
  },

  fullBackground: {
    type: Boolean,
    default: false,
  },

  noimage: {
    type: Boolean,
    default: false,
  }
});

const styles = computed<any>(() => {
  return {
    background: props.backgroundColor,
    width: props.fullBackground ? 'auto' : '23.75rem',
  };
});


// show hide banner
const emit = defineEmits(['onBannerToggle']);

const isBannerHide = ref(false);

emit('onBannerToggle', () => isBannerHide.value = !isBannerHide.value);

// countdown
const timeleft = ref();

const addZeroString = ((time: number): string => time < 10 ? `0${time}`: `${time}`);

const doCountdown = () => {
  if (!props.countdown) return;

  const x = setInterval(() => {
    // Set the date we're counting down to
    const countDownDate = new Date(props.countdown).getTime();

    // Get today's date and time
    const now = new Date().getTime();

    // Find the distance between now and the count down date
    const distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    const hours = Math.floor(distance / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Output the result in an element with id="demo"
    timeleft.value = `${addZeroString(hours)} : ${addZeroString(minutes)} : ${addZeroString(seconds)}`;

    // If the count down is over, write some text
    if (distance < 0) {
      clearInterval(x);
    }
  }, 1000);
};

onMounted(() => {
  doCountdown();
});
</script>

<style lang="scss">
@use "@/styles/molecules/card-section";
</style>

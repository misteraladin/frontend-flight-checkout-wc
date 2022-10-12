<template>
  <div class="ma-card-section__header-flashsale">
    <div class="flashsale flashsale__icon">
      <svg
        width="26"
        height="36"
        viewBox="0 0 26 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12.849 36H7.07847L10.0785 24H3.87897C3.27984 23.9998 2.68906 23.8594 2.15386 23.5901C1.61866 23.3208 1.15387 22.93 0.79663 22.449C0.439391 21.968 0.199608 21.4102 0.0964415 20.82C-0.00672489 20.2298 0.0295861 19.6236 0.202472 19.05L5.96397 0H20.1645L15.6645 12H21.699C22.3856 12.0004 23.0592 12.1869 23.6483 12.5396C24.2373 12.8923 24.7198 13.398 25.0445 14.0029C25.3691 14.6079 25.5238 15.2895 25.492 15.9754C25.4602 16.6612 25.2432 17.3256 24.864 17.898L12.849 36Z"
          fill="#FDD835"
        />
      </svg>
    </div>

    <h1 v-if="data.name" class="flashsale">
      {{ data.name }}
    </h1>

    <div v-if="data.countdown" class="flashsale flashsale__countdown">
      <div class="flashsale__countdown-icon">
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.99935 15.3333C12.0494 15.3333 15.3327 12.0501 15.3327 7.99999C15.3327 3.9499 12.0494 0.666656 7.99935 0.666656C3.94926 0.666656 0.666016 3.9499 0.666016 7.99999C0.666016 12.0501 3.94926 15.3333 7.99935 15.3333Z"
            stroke="#3D4151"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M7.99902 5.17944V7.99996L10.8647 11.3394"
            stroke="#3D4151"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>

      <div class="flashsale__countdown-text">
        {{ t("ends_in") }}
      </div>

      <div class="flashsale__countdown-time">
        <span>{{ countdown }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted } from "vue";

const props = defineProps({
  data: {
    type: Object,
    required: true,
  },

  t: {
    type: Object as any,
    required: true,
  },
});

const { data, t } = reactive(props);

// countdown
const countdown = ref();

const addZeroString = ((time: number): string => time < 10 ? `0${time}`: `${time}`);

const doCountdown = () => {
  const x = setInterval(() => {
    // Set the date we're counting down to
    const countDownDate = new Date(data.countdown).getTime();

    // Get today's date and time
    const now = new Date().getTime();

    // Find the distance between now and the count down date
    const distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    const hours = Math.floor(distance / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Output the result in an element with id="demo"
    countdown.value = `${addZeroString(hours)} : ${addZeroString(minutes)} : ${addZeroString(seconds)}`;

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

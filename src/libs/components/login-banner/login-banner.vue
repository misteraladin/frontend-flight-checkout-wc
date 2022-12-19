<template>
  <div class="ma-banner-login">
    <div class="ma-banner-login__content">
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M7.54872 0C5.19138 0 3.28204 1.79 3.28204 4C3.28204 6.21 5.19138 8 7.54872 8C9.90606 8 11.8154 6.21 11.8154 4C11.8154 1.79 9.90606 0 7.54872 0ZM9.68443 4C9.68443 2.89524 8.72952 2 7.55111 2C6.3727 2 5.41779 2.89524 5.41779 4C5.41779 5.10476 6.3727 6 7.55111 6C8.72952 6 9.68443 5.10476 9.68443 4ZM13.9489 12.9688C13.9489 12.3688 10.9387 11.0001 8.08228 11.0001C5.2259 11.0001 2.21564 12.3688 2.21564 12.9688V14H13.9489V12.9688ZM0.0818481 13C0.0818481 10.34 5.41185 9.00003 8.08185 9.00003C10.7518 9.00003 16.0818 10.34 16.0818 13V16H0.0818481V13Z"
          fill="#FEF058"
        />
      </svg>

      <div class="ma-banner-login__content-description">
        {{ t('want_to_save') }}
      </div>
    </div>
    <a :href="loginUrl">
      <button class="ma-banner-login__button" type="button">LOG IN</button>
    </a>
  </div>
</template>

<script setup lang="ts">
interface Props {
  loginUrl: string;
  t: Function;
}

const {loginUrl, t} = defineProps<Props>();
</script>

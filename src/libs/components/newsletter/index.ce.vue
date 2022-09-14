<template>
  <div class="newsletter">
    <span>
      Yuk, langganan newsletter kami untuk menjadi yang pertama mengetahui promo
      terbaru Mister Aladin!
    </span>
    <ElInput
      placeholder="Alamat e-mail kamu"
      style="
        width: 560px;
        --el-fill-color-light: #dd2c00;
        --el-color-info: white;
      "
    >
      <template #prefix>
        <svg
          width="20"
          height="16"
          viewBox="0 0 20 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M17.8667 1.33333C18.2667 1.33333 18.6667 1.73333 18.6667 2.13333V13.8667C18.6667 14.2667 18.2667 14.6667 17.8667 14.6667H2.13333C1.73333 14.6667 1.33333 14.2667 1.33333 13.8667V2.13333C1.33333 1.73333 1.73333 1.33333 2.13333 1.33333H17.8667ZM17.8667 0H2.13333C0.933333 0 0 0.933333 0 2.13333V13.8667C0 15.0667 0.933333 16 2.13333 16H17.8667C19.0667 16 20 15.0667 20 13.8667V2.13333C20 0.933333 19.0667 0 17.8667 0Z"
            fill="#424242"
          />
          <path
            d="M20 3.46666L11.8667 6.53333C11.3333 6.79999 10.6667 6.79999 10 6.79999C9.33333 6.79999 8.66667 6.66666 8.13333 6.39999L0 3.46666V5.33332L8.13333 8.39999C8.66667 8.66666 9.33333 8.79999 10 8.79999C10.6667 8.79999 11.3333 8.66666 11.8667 8.39999L20 5.33332V3.46666Z"
            fill="#424242"
          />
        </svg>
      </template>
      <template #append>
        <div class="bg-red">Berlangganan</div>
      </template>
    </ElInput>
  </div>
</template>

<script lang="ts" setup>
import { ElInput } from 'element-plus';
import Button from '../../atoms/button/button.vue';
</script>

<style lang="scss">
@use '@/styles/newsletter';
</style>

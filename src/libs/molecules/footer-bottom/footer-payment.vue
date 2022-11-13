<template>
  <div class="footer-bottom__footer-payment">
    <p>{{ t("title_payment") }}</p>
    <div class="footer-bottom__footer-payment__section">
      <div class="footer-bottom__footer-payment__section__image-payment">
        <img src="./icon/Payment.svg" alt="" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { t } = defineProps({
  t: {
    type: Object as any,
    required: true,
  },
});
</script>

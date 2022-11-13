<template>
  <div class="footer-top__footer-others">
    <p>{{ t("title_others") }}</p>
    <div class="footer-top__footer-others__faq">
      <a href="/faq">{{ t("faq") }}</a>
    </div>
    <div class="footer-top__footer-others__privacy-policy">
      <a href="/privacy-policy">{{ t("privacy_policy") }}</a>
    </div>
    <div class="footer-top__footer-others__terms-condition">
      <a href="/terms-and-conditions">{{ t("terms_condition") }}</a>
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

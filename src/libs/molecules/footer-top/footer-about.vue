<template>
  <div class="footer-top__footer-about">
    <p>{{ t("title_about_misteraladin") }}</p>
    <div class="footer-top__footer-about__about-us">
      <a href="/about">{{ t("about_us") }}</a>
    </div>
    <div class="footer-top__footer-about__press">
      <a href="https://press.misteraladin.com">{{ t("pres") }}</a>
    </div>
    <div class="footer-top__footer-about__beourpartner">
      <a href="/be-our-partner">{{ t("be_ourpartner") }}</a>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive } from "vue";

const { t } = defineProps({
  t: {
    type: Object as any,
    required: true,
  },
});
</script>

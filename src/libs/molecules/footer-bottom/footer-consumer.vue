<template>
  <div class="footer-bottom__footer-consumer">
    <p>{{ t("title_consumer") }}</p>
    <div class="footer-bottom__footer-consumer__section">
      <div class="footer-bottom__footer-consumer__section__company">
        PT MNC ALADIN INDONESIA
      </div>
      <div class="footer_bottom__footer-consumer__section__cs">
        <a href="mailto:cs@misteraladin.com">cs@misteraladin.com</a>
      </div>
      <div clas="footer_bottom__footer-consumer__section__directorate">
        {{ t("directorate") }}
      </div>
      <div clas="footer_bottom__footer-consumer__section__whatsapp">
        {{ t("whatsapp_ditjen") }}
        <a href="https://wa.me/6285311111010">+62 853 1111 1010</a>
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

<template>
  <div class="footer-bottom">
    <FooterConsumer :t="t" />
    <FooterPayment :t="t" />
    <FooterApps :t="t" />
  </div>
</template>

<script setup lang="ts">
import FooterConsumer from "./footer-consumer.vue";
import FooterPayment from "./footer-payment.vue";
import FooterApps from "./footer-apps.vue";
import messages from "./lang-footer-bottom";
import { useI18n } from "vue-i18n";

//props t
const { t } = useI18n({
  messages,
});
</script>

<style lang="scss">
@use "@/styles/molecules/footer.scss";
</style>

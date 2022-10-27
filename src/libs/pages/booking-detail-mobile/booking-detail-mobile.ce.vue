<template>
  <div id="booking-detail-mobile">
    <Header>
      {{ t("booking_details") }}
    </Header>

    <FlightItem />
    <BannerLogin :t="t" />

    <Footer>
      {{ t("next") }}
    </Footer>
  </div>
</template>

<script setup lang="ts">
import Header from "./mobile-header.vue";
import FlightItem from "./booking-detail-flight-item-mobile.vue";
import BannerLogin from "./mobile-banner-login.vue";
import Footer from "./mobile-footer.vue";
import { useI18n } from "vue-i18n"; // import i18n plugin
import messages from "./lang-booking-detail-mobile"; // import dictionary

// create i18n instance
const { t } = useI18n({
  messages,
});
</script>

<style lang="scss">
@use '@/styles/pages/booking-detail-mobile';
</style>


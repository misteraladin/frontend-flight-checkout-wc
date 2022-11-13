<template>
  <div class="footer-top">
    <FooterContact :t="t" />
    <FooterAbout :t="t" />
    <FooterProducts :t="t" :data="data" />
    <FooterOthers :t="t" />
    <FooterSocial :t="t" />
  </div>
</template>

<script lang="ts" setup>
import FooterContact from "./footer-contact.vue";
import FooterAbout from "./footer-about.vue";
import FooterProducts from "./footer-products.vue";
import FooterOthers from "./footer-others.vue";
import messages from "./lang-footer-top";
import { useI18n } from "vue-i18n";
import FooterSocial from "./footer-social.vue";

//props t
const { t } = useI18n({
  messages,
});

//props data
const { data } = defineProps({
  data: {
    type: String,
    required: true,
  },
});
</script>

<style lang="scss">
@use "@/styles/molecules/footer.scss";
</style>

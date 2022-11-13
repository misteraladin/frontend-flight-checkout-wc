<template>
  <div class="footer-copyright">
    <hr />
    <p>
      {{ t("title_left") }} <span class="center">{{ t("title_center") }}</span>
      {{ t("title_right") }}
    </p>
  </div>
</template>

<script setup lang="ts">
import messages from "./lang-footer-copyright";
import { useI18n } from "vue-i18n";

//props t
const { t } = useI18n({
  messages,
});
</script>

<style lang="scss">
@use "@/styles/molecules/footer.scss";
</style>

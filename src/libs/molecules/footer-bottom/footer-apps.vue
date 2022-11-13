<template>
  <div class="footer-bottom__footer-apps">
    <p>{{ t("title_download") }}</p>
    <div class="footer-bottom__footer-apps__section">
      <div class="footer-bottom__footer-apps__section__playstore">
        <a
          href="https://play.google.com/store/apps/details?id=com.misteraladin.android&hl=en"
          ><img src="./icon/Playstore.svg" alt=""
        /></a>
      </div>
      <div class="footer-bottom__footer-apps__section__appstore">
        <a
          href="https://itunes.apple.com/ca/app/mister-aladin-hotel-booking/id1144403123?mt=8"
          ><img src="./icon/Appstore.svg" alt=""
        /></a>
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

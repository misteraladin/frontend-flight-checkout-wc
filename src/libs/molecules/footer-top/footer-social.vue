<template>
  <div class="footer-top__footer-social">
    <p>{{ t("title_followus") }}</p>
    <a href="https://www.facebook.com/MisterAladin">
      <div class="footer-top__footer-social__facebook">
        <div class="icon">
          <img src="./icon/Facebook.svg" alt="" />
        </div>
        <div class="text">Facebook</div>
      </div>
    </a>
    <a href="https://instagram.com/MisterAladin">
      <div class="footer-top__footer-social__instagram">
        <div class="icon">
          <img src="./icon/Instagram.svg" alt="" />
        </div>
        <div class="text">Instagram</div>
      </div>
    </a>
    <a href="https://twitter.com/misteraladinID">
      <div class="footer-top__footer-social__twitter">
        <div class="icon">
          <img src="./icon/Twitter.svg" alt="" />
        </div>
        <div class="text">Twitter</div>
      </div>
    </a>
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

<!-- <div class="footer__footer-social__instagram">
      <div class="icon">Icon</div>
      <div class="text">Instagram</div>
    </div>
    <div class="footer__footer-social__twitter">
      <div class="icon">Icon</div>
      <div class="text">Twitter/div>
    </div> -->

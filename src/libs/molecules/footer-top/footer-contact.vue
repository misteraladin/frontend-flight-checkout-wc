<template>
  <div class="footer-top__footer-contact">
    <div class="footer-top__footer-contact__footer-personal-asistant">
      <p>Personal Asisstant</p>
      <div
        class="footer-top__footer-contact__footer-personal-asistant__content"
      >
        <div class="icon">
          <img src="./icon/PA.svg" alt="" />
        </div>
        <div class="phone">
          <a href="tel:+622139836900">+6221 3983 8900</a>
          <br />
          <a href="tel:+622180625262">+6221 8062 5262</a>
        </div>
      </div>
    </div>
    <div class="footer-top__footer-contact__footer-whatsapp">
      <div class="footer__footer-contact__footer-whatsapp__whatsapp">
        <p>WhatsApp</p>
        <div
          class="footer-top__footer-contact__footer-whatsapp__whatsapp__content"
        >
          <div class="icon">
            <img src="./icon/Whatsapp.svg" alt="" />
          </div>
          <div class="phone">
            <a href="https://api.whatsapp.com/send?phone=62811956900"
              >+62 811 956 900</a
            >
          </div>
        </div>
      </div>
    </div>
    <div class="footer-top__footer-contact__footer-email">
      <div class="footer-top__footer-contact__footer-email__email">
        <p>E - mail</p>
        <div class="footer-top__footer-contact__footer-email__email__content">
          <div class="icon">
            <img src="./icon/Email.svg" alt="" />
          </div>
          <div class="phone">
            <a href="mailto:cs@misteraladin.com">cs@misteraladin.com</a>
          </div>
        </div>
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

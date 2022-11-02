<template>
  <div id="mobile-banner-login">
    <div class="mobile-banner-login__text">
      {{ t("want_to_save") }}
    </div>

    <button class="mobile-banner-login__button" @click="redirecToLogin">
      {{ t("login ") }}
    </button>
  </div>
</template>


<script setup lang="ts">
import { reactive } from "vue";

const props = defineProps({
  t: {
    type: Object as any,
    required: true,
  },
});

const { t: any } = reactive(props);

const redirecToLogin = () => {
  //
};
</script>

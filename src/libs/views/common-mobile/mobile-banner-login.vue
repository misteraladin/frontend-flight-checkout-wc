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
import { Prop, reactive } from "vue";

interface Props {
  t: Function;
}
const { t } = defineProps<Props>();

const redirecToLogin = () => {
  //
};
</script>

<template>
  <div id="mobile-banner-login">
    <div class="mobile-banner-login__text">
      {{ t('want_to_save') }}
    </div>
    <a :href="loginUrl">
      <button class="mobile-banner-login__button" @click="redirecToLogin">
        {{ t('login ') }}
      </button>
    </a>
  </div>
</template>

<script setup lang="ts">
import { Prop, reactive } from 'vue';

interface Props {
  t: Function;
  loginUrl: string;
}
const { t } = defineProps<Props>();

const redirecToLogin = () => {
  //
};
</script>

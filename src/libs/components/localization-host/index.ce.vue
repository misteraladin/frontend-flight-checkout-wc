<template>
  <slot />
</template>

<script setup lang="ts">
import { provide } from 'vue';
import { createI18n, I18nInjectionKey } from 'vue-i18n';

const { languange } = defineProps({
  languange: {
    type: String as () => 'en' | 'id',
    required: false,
    default: 'id',
  },
});

const i18n = createI18n<false>({
  legacy: false, // must set to `false`
  locale: languange,
  fallbackLocale: 'id',
});

provide(I18nInjectionKey, i18n);
</script>

<script lang="ts" setup>
interface Brand {
  url: string;
  logo: string;
  name: string;
}

const { url, logo, name } = defineProps<Brand>();
</script>

<template>
  <a :href="url" class="brand-item">
    <div class="brand-image-wrapper">
      <img :src="logo" :alt="name" />
    </div>

    <div class="brand-name">
      {{ name }}
    </div>
  </a>
</template>

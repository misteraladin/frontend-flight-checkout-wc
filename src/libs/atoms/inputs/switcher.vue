<template>
  <div class="ma-switcher">
    <span><slot /></span>
    <label class="switch">
      <input type="checkbox" />
      <span class="slider"></span>
    </label>
  </div>
</template>

<script setup lang="ts">
const props: any = defineProps([]);
</script>

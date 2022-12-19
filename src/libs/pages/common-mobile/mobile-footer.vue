<template>
  <div id="mobile-footer">
    <button @click="emit('next')">
      <slot />
    </button>
  </div>
</template>

<script setup lang="ts">
const emit = defineEmits(['next']);
</script>

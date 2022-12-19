<template>
  <div class="ma-switcher">
    <span><slot /></span>
    <label class="switch">
      <input
        type="checkbox"
        @change="$emit('onSwitch', model)"
        v-model="model"
      />
      <span class="slider"></span>
    </label>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const props: any = defineProps([]);

const model = ref(false);

defineEmits(['onSwitch']);
</script>

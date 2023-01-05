<template>
  <div id="modal-peek-mobile" @click.self="close">
    <div class="modal-peek-mobile__wrapper">
      <div class="modal-peek-mobile__body">
        <slot />
      </div>

      <div class="modal-peek-mobile__footer">
        <slot name="footer"></slot>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const emit = defineEmits(['close']);

const close = () => {
  emit('close');
};
</script>
<template>
  <div id="modal-base-mobile" @click.self="close">
    <div class="modal-base-mobile__body" :style="{ width }">
      <div class="modal-base-mobile__image">
        <slot name="image"></slot>
      </div>
      <div class="modal-base-mobile__title">
        <slot name="title"></slot>
      </div>
      <slot />
      <div class="modal-base-mobile__footer">
        <slot name="footer"></slot>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  width: string
}
const { width } = withDefaults(defineProps<Props>(), {
  width: '65%',
});

const emit = defineEmits(['close']);
const close = () => {
  emit('close');
};
</script>
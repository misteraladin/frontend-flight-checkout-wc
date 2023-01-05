<template>
  <transition name="slide-up">
    <div id="modal-window-mobile">
      <Header>
        <template v-slot:left>
          <button type="button" class="btn btn-header" @click.self="close">
            <!-- <img
              src="/booking-mobile/close.svg"
              alt="Close"
            > -->
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.295 2.115C13.6844 1.72564 13.6844 1.09436 13.295 0.705C12.9056 0.315639 12.2744 0.315639 11.885 0.705L7 5.59L2.115 0.705C1.72564 0.315639 1.09436 0.315639 0.705 0.705C0.315639 1.09436 0.315639 1.72564 0.705 2.115L5.59 7L0.705 11.885C0.315639 12.2744 0.315639 12.9056 0.705 13.295C1.09436 13.6844 1.72564 13.6844 2.115 13.295L7 8.41L11.885 13.295C12.2744 13.6844 12.9056 13.6844 13.295 13.295C13.6844 12.9056 13.6844 12.2744 13.295 11.885L8.41 7L13.295 2.115Z"
                fill="#FEFEFE"
              />
            </svg>
          </button>
        </template>

        <slot name="header" />
      </Header>

      <div class="modal-window-mobile__body">
        <slot />
      </div>

      <transition name="slide-up">
        <Footer v-if="$slots.footer" @click="close">
          <slot name="footer" />
        </Footer>
      </transition>
    </div>
  </transition>
</template>

<script setup lang="ts">
import Header from './mobile-header.vue';
import Footer from './mobile-footer.vue';
import { onBeforeUnmount, onMounted } from 'vue';

const emit = defineEmits(['close']);

const close = () => {
  emit('close');
};

onMounted(() => {
  document.addEventListener('keydown', triggerKey);
});
onBeforeUnmount(() => {
  document.removeEventListener('keydown', triggerKey);
});
const triggerKey = (event: any) => {
  if (event.keyCode !== 27) return;
  close();
};
</script>

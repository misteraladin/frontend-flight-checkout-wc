<template>
  <transition name="slide-up">
    <div id="modal-window-mobile">
      <Header>
        <template v-slot:left>
          <button
            type="button"
            class="btn btn-header"
            @click.self="close"
          >
            <img
              src="/booking-mobile/close.svg"
              alt="Close"
            >
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
import Header from "./mobile-header.vue";
import Footer from "./mobile-footer.vue";
import { onBeforeUnmount, onMounted } from "vue";

const emit = defineEmits(['close']);

const close = () => {
  emit('close');
}

onMounted(() => {
  document.addEventListener('keydown', triggerKey);
});
onBeforeUnmount(() => {
  document.removeEventListener('keydown', triggerKey);
})
const triggerKey = (event: any) => {
  if (event.keyCode !== 27) return;
  close();
};
</script>

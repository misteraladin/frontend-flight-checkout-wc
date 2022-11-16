<template>
  <transition name="slide-up">
    <div id="modal-window-mobile">
      <Header>
        <template v-slot:left>
          <button
            type="button"
            class="btn btn-header"
            @click="$emit('close')"
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
        <Footer @click="$emit('close')">
          <slot name="footer" />
        </Footer>
      </transition>
    </div>
  </transition>
</template>

<script setup lang="ts">
import Header from "./mobile-header.vue";
import Footer from "./mobile-footer.vue";

</script>

<!-- <script>
export default {
  props: {
  // data() {
  //   return {
  //     show: false,
  //   };
  // },

  // created() {
  //   setTimeout(() => {
  //     this.show = !this.show;
  //   }, 150);
  // },

  // mounted() {
  //   document.addEventListener('keydown', this.triggerKey);
  // },

  // beforeDestroy() {
  //   document.removeEventListener('keydown', this.triggerKey);
  //   this.show = !this.show;
  // },

  // methods: {
  //   closeModal() {
  //     this.show = !this.show;

  //     setTimeout(() => {
  //       this.$emit('close');
  //     }, 150);
  //   },

  //   triggerKey(event) {
  //     if (event.keyCode !== 27) return;
  //     this.closeModal();
  //   },
  // },
};
</script> -->

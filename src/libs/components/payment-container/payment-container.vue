<template>
  <div id="checkout-page" class="checkout-payment">
    <iframe :src="props.src" class="embed position-fixed">
      <p>Your browser does not support iframes.</p>
    </iframe>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, onUnmounted, ref } from 'vue';

interface Props {
  src: string;
}

const emit = defineEmits(['cancel', 'complete', 'update:modelValue']);

const props = defineProps<Props>();

const endpoint = ref('https://pay.misteraladin.com');

onMounted(() => {
  document.body.classList.add('no-scroll-please');
});

onUnmounted(() => {
  document.body.classList.remove('no-scroll-please');
});

// const listenEvent = (e: any) => {
//   if (e.origin !== 'http://flight-dom.test') return;
//   console.log('event', e);
//   // if (e.origin !== this.endpoint) return;

//   const {
//     message,
//     redirect_url: redirectUrl,
//     payment_type: paymentType,
//   } = e.data;

//   // if (e.origin !== endpoint) return;

//   if (message === 'payment-cancel') {
//     emit('cancel');
//   }

//   if (message === 'payment-complete') {
//     emit('complete', redirectUrl);
//   }
// };

// onMounted(() => {
//   console.log('element is mounted');
//   window.addEventListener('message', listenEvent);
// });

// onUnmounted(() => {
//   window.removeEventListener('message', listenEvent);
// });
</script>

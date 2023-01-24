<template>
  <ActionSheet
    v-model:show="model"
    :title="props.title"
    :round="false"
    style="height: 100%; max-height: unset"
    class="ma-modal"
  >
    <div class="modal-window-mobile__body">
      <slot />
    </div>
    <Footer v-if="$slots.footer" @click="close">
      <slot name="footer" />
    </Footer>
  </ActionSheet>
</template>

<script setup lang="ts">
import Header from './mobile-header.vue';
import Footer from './mobile-footer.vue';

import { ActionSheet } from 'vant';
import { computed, onBeforeUnmount, onMounted } from 'vue';

interface Props {
  show: boolean;
  title: string;
}

const props = defineProps<Props>();

const emit = defineEmits(['close', 'update:show']);

const model = computed({
  get() {
    return props.show;
  },
  set(val: boolean) {
    emit('update:show', val);
  },
});

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

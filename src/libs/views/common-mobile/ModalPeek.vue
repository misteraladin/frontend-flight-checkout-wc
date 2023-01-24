<template>
  <Popup
    v-model:show="isShow"
    position="bottom"
    :style="{
      '--van-popup-round-radius': '8px',
      ...customStyle,
    }"
    :round="true"
    :lock-scroll="true"
  >
    <div class="modal-peek-mobile__body">
      <slot />
    </div>

    <div class="modal-peek-mobile__footer">
      <slot name="footer"></slot>
    </div>
  </Popup>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { Popup } from 'vant';

interface Props {
  show: boolean;
  customStyle?: any;
}

const props = defineProps<Props>();

const emit = defineEmits(['close', 'update:show']);

const isShow = computed({
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
</script>

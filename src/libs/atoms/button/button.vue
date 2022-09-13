<template>
  <button
    :type="type"
    :class="classes"
    :disabled="disabled || isLoading"
    @click="handleClick"
  >
    <span v-if="showIconSlot && !isLoading" class="btn-icon">
      <slot name="icon" />
    </span>

    <span v-if="showSlot && !isLoading" ref="slot" class="btn-text">
      <slot></slot>
    </span>

    <ma-spinner v-if="isLoading" :variant="spinnerVariant" />
  </button>
</template>

<script setup lang="ts">
import { ButtonHTMLAttributes, computed, ref } from 'vue';

interface Props extends ButtonHTMLAttributes {
  variant?: 'primary' | 'warning';
  outline?: boolean;
  rounded?: boolean;
  expanded?: boolean;
  disabled?: boolean;
  isLoading?: boolean;
  type?: ButtonHTMLAttributes['type'];
}

//accepted props
const props = defineProps<Props>();
// const props = defineProps({
//   outline: {
//     type: Boolean,
//     default: false,
//   },
//   rounded: {
//     type: Boolean,
//     default: false,
//   },
//   expanded: {
//     type: Boolean,
//     default: false,
//   },
//   disabled: {
//     type: Boolean,
//     default: false,
//   },
//   isLoading: {
//     type: Boolean,
//     default: false,
//   },
//   type: {
//     validator: (value: string) => {
//       return ['button', 'submit', 'reset'].includes(value);
//     },
//     type: String as () => 'button' | 'submit' | 'reset',
//     default: 'button',
//   },
// });

//local variable
const showSlot = ref(true);
const showIconSlot = ref(false);

//computed variables
const classes = computed(() => [
  'btn',
  {
    'btn-outline': props.outline,
    'btn-rounded': props.rounded,
    'btn-fullwidth': props.expanded,
    'btn-icon': showIconSlot,
    loading: props.isLoading != null && props.isLoading,
    //variant
    btn_warning: props.variant === 'warning',
  },
]);

const spinnerVariant = computed(() =>
  props.outline ? 'primary' : 'secondary'
);

//methods
//define emit
const emit = defineEmits(['click']);

const handleClick = (event: MouseEvent) => {
  emit('click', event);
};
</script>

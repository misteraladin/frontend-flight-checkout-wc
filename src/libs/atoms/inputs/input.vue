<template>
  <input :class="['ma-input']" :value="props.modelValue" @input="onInput" />
</template>

<script setup lang="ts">
interface Props {
  modelValue?: string;
}

const props = defineProps<Props>();
const emit = defineEmits(['update:modelValue']);

const onInput = (event: Event) => {
  emit('update:modelValue', (event as any).target.value);
};
</script>

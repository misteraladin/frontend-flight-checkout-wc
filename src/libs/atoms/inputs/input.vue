<template>
  <!-- <input :class="['ma-input']" :value="props.modelValue" @input="onInput" /> -->
  <ElInput
    :modelValue="props.modelValue"
    @input="onInput"
    :class="['ma-input']"
    style="--el-color-primary: #323c9f"
  >
    <slot></slot>
  </ElInput>
</template>

<script setup lang="ts">
import { ElInput } from 'element-plus';

interface Props {
  modelValue?: string;
}

const props = defineProps<Props>();
const emit = defineEmits(['update:modelValue']);

const onInput = (value: string) => {
  emit('update:modelValue', value);
};
</script>

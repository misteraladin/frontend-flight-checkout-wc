<template>
  <ElSelect
    :model-value="modelValue"
    @change="(t:string) => $emit('update:modelValue', t)"
    placeholder="Select"
    class="ma-dropdown"
    :style="{
      minWidth: `calc(${elementWidth} + 1ch + 48px)`,
      '--el-color-primary': '#323c9f',
      width: '100%',
    }"
    filterable
  >
    <template v-slot:prefix>
      <slot name="prefix" />
    </template>
    <slot name="options" v-if="useOptionSlot" />
    <ElOption
      v-else
      v-for="opt in parsedOptions"
      :key="opt[value]"
      :label="opt[label]"
      :value="opt[value]"
    ></ElOption>
  </ElSelect>
</template>

<script lang="ts" setup>
import { ElSelect, ElOption } from 'element-plus';
import { computed, reactive } from 'vue';

interface Props {
  options: any;
  value: string;
  label: string;
  modelValue?: string;
  useOptionSlot?: boolean;
}
const { options, modelValue, label, value, useOptionSlot } =
  defineProps<Props>();
const emit = defineEmits(['update:modelValue']);
const parsedOptions = reactive(JSON.parse(options));

const computedValue = computed({
  get() {
    console.log(modelValue);
    return modelValue;
  },
  set(val) {
    emit('update:modelValue', val);
  },
});
// const computedValue = ref('');

/**
 * compute width of dropdown
 * based on the length of the longest option
 */
const elementWidth = computed(() => {
  if (!parsedOptions.length) return '40px';
  const longest = parsedOptions.reduce((acc: string, curr: any) => {
    return curr[label].length > acc.length ? curr[label] : acc;
  }, '').length;
  // if (asIcon) return longest + 1.5 + 'ch';
  return longest + 'ch';
});
</script>

<template>
  <ElFormItem
    :label="label"
    class="ma-input-group"
    :prop="prop"
    :error="error ? error : ''"
  >
    <slot />
  </ElFormItem>
</template>

<script lang="ts" setup>
import { ElFormItem } from 'element-plus';
import { reactive } from 'vue';

interface Props {
  label: string;
  prop?: string;
  rules?: string;
  error?: string;
}
const { label, prop, rules, error } = defineProps<Props>();

const parsedRules = reactive(JSON.parse(rules ? rules : '{}'));
</script>

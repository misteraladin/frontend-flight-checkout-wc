<template>
  <ElFormItem
    :label="label"
    class="ma-input-group"
    :prop="prop"
    :error="error ? error : ''"
  >
    <slot />
    <slot name="error" v-if="info && !error"
      ><span style="font-size: 12px; font-weight: 500; color: #424242">{{
        info
      }}</span></slot
    >
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
  info?: string;
}
const { label, prop, rules, error, info } = defineProps<Props>();

const parsedRules = reactive(JSON.parse(rules ? rules : '{}'));
</script>

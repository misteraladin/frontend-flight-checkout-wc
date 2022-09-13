<template>
  <ElDatePicker
    :teleported="true"
    placeholder="hh/bb/tt"
    size="large"
    style="--el-color-primary: #323c9f"
    class="ma-calendar"
    v-model="value"
    type="date"
    :prefix-icon="CalendarIcon"
    format="DD-MM-YYYY"
    popper-class="ma-calendar__dropdown"
  />
</template>

<script setup lang="ts">
import { ElDatePicker } from 'element-plus';
import { ref } from 'vue';

import CalendarIcon from './calendar-icon.vue';

interface Props {
  parentNode: any;
}

// const { parentNode } = defineProps<Props>();

const getParent = (node: HTMLElement) => {
  console.log(node);
  return node;
};

// const darkTheme = createTheme([inputDark, datePickerDark]);

const value = ref('');
</script>

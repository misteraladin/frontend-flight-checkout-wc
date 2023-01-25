<template>
  <div class="ma-multi-select">
    <div class="item-all container" @click="handleSelectAll">
      <input type="checkbox" :checked="isSelectedAll" />
      <span class="checkmark"></span>
      <label>
        Semua Produk
      </label>
    </div>

    <div
      v-for="(option, index) in options"
      :key="index"
      @click="handleSelectItem(option.value)"
      class="item container"
    >
      <input type="checkbox" :checked="currentValue.includes(option.value)" />
      <span class="checkmark"></span>
      <img
        v-if="option.icon"
        :src="option.icon"
        :alt="option.label"
        class="icon"
      />
      <label>{{ option.label }}</label>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from "vue";

interface Option {
  label: string;
  value: string;
  icon?: string;
}
interface Props {
  options: string;
  value: string;
}
const props = defineProps<Props>();
const options: any = ref(props.options ? JSON.parse(props.options) : null);
const currentValue = ref(props.value ? JSON.parse(props.value) : null);

const optionsValues = computed(() => {
  return options.value.map((option: Option) => option.value);
});

const isSelectedAll = computed(() => {
  return optionsValues.value.every((option: string) =>
    currentValue.value.includes(option)
  );
});

const handleSelectAll = () => {
  if (isSelectedAll.value) {
    currentValue.value = [];
    // emit []
    return;
  }

  currentValue.value = optionsValues.value;
  // emit optionsValues.value
};

const handleSelectItem = (item: string) => {
  const isItemSelected = currentValue.value.includes(item);

  if (isItemSelected) {
    currentValue.value = currentValue.value.filter(
      (val: string) => val !== item
    );
    return;
  }

  currentValue.value = [...currentValue.value, item];
  // emit currentValue.value
  return;
};
</script>

<style lang="scss">
@use "@/styles/atoms/multi-select";
</style>

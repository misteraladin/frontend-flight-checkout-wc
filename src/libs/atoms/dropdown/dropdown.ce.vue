<template>
  <div class="ma-dropdown">
    <Button
      class="btn-outline"
      @click="handleClick"
    >
      {{ title }}
    </Button>

    <div v-if="isDropdownOpen && products.length" class="ma-dropdown-content">
      <div class="item-all" @click="handleSelectAll">
        <input type="checkbox" :checked="isSelectedAll" />
        <label for="scales">Semua</label>
      </div>

      <div
        class="item"
        v-for="product in products"
        @click="handleSelectItem(product)"
      >
        <input type="checkbox" :checked="product.checked" />
        <img class="dropdown-icon" :src="product.icon_svg" :alt="product.caption" />
        <label for="scales">{{ product.caption }}</label>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from "vue";
import Button from "../button/button.vue";

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  data: {
    type: String,
    required: true,
  },
});

const isDropdownOpen = ref(false);
const products: Array<any> = reactive(
  props.data
    ? JSON.parse(props.data).map((x: any) => {
        return {
          ...x,
          checked: false,
        };
      })
    : null
);

const isSelectedAll = ref(
  products.find((x) => x.checked === false) ? false : true
);

const handleClick = () => {
  isDropdownOpen.value = !isDropdownOpen.value;
};
const handleSelectAll = () => {
  isSelectedAll.value = !isSelectedAll.value;

  products.forEach((element: any) => {
    element.checked = isSelectedAll.value;
  });
};
const handleSelectItem = (item: any) => {
  item.checked = !item.checked;

  isSelectedAll.value = products.find((x) => x.checked === false)
    ? false
    : true;
};
</script>

<style lang="scss">
@use "@/styles/atoms/dropdown";
@use "@/styles/partials/button/button";
</style>

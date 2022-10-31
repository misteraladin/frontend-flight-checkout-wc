<template>
  <div class="ma-tab-category" :class="{ 'is-small': isSmall }">
    <div class="ma-tab-category__wrapper">
      <div
        v-for="(category, index) in data"
        :key="index"
        @click="onClick(index)"
        class="ma-tab-category__body"
        :class="activeTab === index && travel ? 'ma-tab-category__body-travel-active' : (
          activeTab === index && mall ? 'ma-tab-category__body-mall-active' : (
            activeTab !== index && travel ? 'ma-tab-category__body-travel' : 'ma-tab-category__body-mall'))"
        :activeTabIndex="activeTab === index"
      >
        <div class="ma-tab-category__title">
          {{ category.name }}
        </div>
      </div>
    </div>

    <div class="ma-tab-content">
      <div class="ma-tab-pane" :class="activeContent && 'active'">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, reactive } from "vue";
import {
  RootArray as IRootArray,
} from "./type-tab-category";
// import { useI18n } from 'vue-i18n';
// import messages from './lang-tab-category-travel';

const props = defineProps({
  data: {
    type: String,
    required: true,
  },

  isSmall: {
    type: Boolean,
    default: false,
  },

  travel: {
    type: Boolean,
    default: false,
  },

  mall: {
    type: Boolean,
    default: false,
  }
});

// const { t } = useI18n({
//   messages,
// });

const data: IRootArray = reactive(props.data ? JSON.parse(props.data) : null);

const activeTab = ref(0);
const activeContent = ref(false);

onMounted(() => {
  activeContent.value = true;
});

const onClick = (index: number) => {
  activeTab.value = index;
  activeContent.value = activeTab.value === index;
};

</script>

<style lang="scss" scoped>
@use "@/styles/molecules/tab-category";
</style>

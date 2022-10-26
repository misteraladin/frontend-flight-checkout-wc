<template>
  <div>
    <ul class="ma-tab grouped justify-content-between">
      <li
        :key="tabItems.index"
        v-if="parsedTabItems.length"
        v-for="tabItems in parsedTabItems"
        :class="[
          'ma-tab-items',
          {
            'active': tabItems.active
          }
        ]"
      >
        {{ tabItems.name }}
      </li>
    </ul>

    <ul class="ma-tab justify-content-between">
      <li
        :key="tabItems.index"
        v-if="parsedTabItems.length"
        v-for="tabItems in parsedTabItems"
        :class="[
          'ma-tab-items',
          {
            'active': tabItems.active
          }
        ]"
      >
        {{ tabItems.name }}
      </li>
    </ul>

    <ul class="ma-tab-sm justify-content-between">
      <li
        :key="tabItems.index"
        v-if="parsedTabItems.length"
        v-for="tabItems in parsedTabItems"
        :class="[
          'ma-tab-items',
          {
            'active': tabItems.active
          }
        ]"
      >
        {{ tabItems.name }}
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
interface TabItem {
  index: Number;
  name: String;
  disabled: Boolean;
}
interface Props {
  data: any;
}

const { data } = defineProps<Props>();

const parsedTabItems = JSON.parse(data).map((x: TabItem, index: number) => {
  return { ...x, active: index === 0 };
});
</script>

<style lang="scss">
@use "@/styles/atoms/tab";
</style>

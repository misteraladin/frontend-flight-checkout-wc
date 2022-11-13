<template>
  <div class="footer-top__footer-products">
    <p>{{ t("title_product") }}</p>
    <div v-for="menu in menus" :key="menu.id">
      <a :href="menu.url">{{ menu.caption }}</a>
    </div>
  </div>
</template>

<script setup lang="ts">
import { AnyARecord } from "dns";
import { reactive, computed } from "vue";
import { Footer as IFooter } from "./type-footer";

const { t, data } = defineProps({
  t: {
    type: Object as any,
    required: true,
  },
  data: {
    type: String,
    required: true,
  },
});

const menus: Array<IFooter> = reactive(data ? JSON.parse(data) : null);
</script>

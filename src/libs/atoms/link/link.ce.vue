<template>
  <div :class="classes">
    <button v-if="!to" type="button" @click="$emit('click')">
      <slot />

      <svg
        v-if="arrow && !to"
        viewBox="0 0 7 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1.70547 0.705384C1.3159 0.315811 0.684276 0.315811 0.294703 0.705384C-0.0945693 1.09466 -0.0949132 1.72569 0.293935 2.11538L4.17009 6L0.293934 9.88462C-0.0949135 10.2743 -0.0945692 10.9053 0.294703 11.2946C0.684276 11.6842 1.3159 11.6842 1.70547 11.2946L6.29298 6.70711C6.68351 6.31658 6.68351 5.68342 6.29298 5.29289L1.70547 0.705384Z"
        />
      </svg>
    </button>

    <a
      v-else-if="isExternal"
      :href="to"
      :title="title"
      target="_blank"
      rel="noopener"
      :class="classes"
    >
      <slot />
    </a>

    <a v-else-if="!isExternal && openCurrent" :href="to" :title="title">
      <slot />
    </a>

    <a v-else :href="to" :title="title" :class="classes">
      <slot />
    </a>

    <svg
      v-if="arrow && to"
      viewBox="0 0 7 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.70547 0.705384C1.3159 0.315811 0.684276 0.315811 0.294703 0.705384C-0.0945693 1.09466 -0.0949132 1.72569 0.293935 2.11538L4.17009 6L0.293934 9.88462C-0.0949135 10.2743 -0.0945692 10.9053 0.294703 11.2946C0.684276 11.6842 1.3159 11.6842 1.70547 11.2946L6.29298 6.70711C6.68351 6.31658 6.68351 5.68342 6.29298 5.29289L1.70547 0.705384Z"
      />
    </svg>
  </div>
</template>

<script lang="ts" setup>
import { computed } from "vue";

enum Variant {
  DEFAULT = "default",
  PRIMARY = "primary",
  BADGE = "badge",
}

interface Props {
  variant: string;
  arrow: boolean;
  disabled: boolean;
  expanded: boolean;
  external: boolean;
  openCurrent: boolean;
  to: string;
  title: string;
}

const {
  variant,
  disabled,
  expanded,
  external,
  openCurrent,
  to,
} = defineProps<Props>();

const classes = computed(() => {
  return [
    "ma-link",
    `ma-link__${variant}`,
    { disabled, expanded },
  ];
});

const checkUrl = (str: string) => {
  const valid = ["https", "tel:", "mailto:"];
  return valid.some((rule) => str.includes(rule));
};

const isExternal = computed(() => {
  if (external) return true;
  if (openCurrent) return false;

  return checkUrl(to);
});
</script>

<style lang="scss">
  @use '../../../styles/atoms/link';
</style>


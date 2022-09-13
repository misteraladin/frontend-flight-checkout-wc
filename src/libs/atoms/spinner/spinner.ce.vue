<template>
  <div :class="classes"></div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    variant: {
      type: String,
      default: 'secondary',
      validator: (value: string) => {
        return ['primary', 'secondary'].includes(value);
      },
    },
  },
  computed: {
    classes() {
      return ['spinner', `spinner__${this.variant}`];
    },
  },
});
</script>

<style lang="scss">
@use '@/styles/utils/functions';
@use '@/styles/utils/colors';

.spinner {
  display: inline-block;
  width: functions.toRem(15);
  height: 15px;
  border: 3px solid rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  border-top-color: colors.$normal-white;
  animation: spinner 1s ease-in-out infinite;
  -webkit-animation: spinner 1s ease-in-out infinite;
  &.spinner__primary {
    border: 3px solid var(--color-primary-lightest);
    border-top-color: var(--color-primary);
  }
}
@keyframes spinner {
  to {
    -webkit-transform: rotate(360deg);
  }
}
@-webkit-keyframes spinner {
  to {
    -webkit-transform: rotate(360deg);
  }
}
</style>

<template>
  <div class="ma-popover">
    <div class="ma-popover__content">
      <slot name="content"></slot>
    </div>

    <slot></slot>
  </div>
</template>

<style lang="scss" scoped>
@use '@/styles/atoms/popover';
</style>

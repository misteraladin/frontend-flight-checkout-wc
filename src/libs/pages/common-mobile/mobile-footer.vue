<template>
  <div id="mobile-footer">
    <button @click="$emit('click')">
      <slot />
    </button>
  </div>
</template>


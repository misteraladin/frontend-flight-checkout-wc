<template>
  <div id="mobile-footer">
    <button @click="$emit('next')">
      <slot />
    </button>
  </div>
</template>


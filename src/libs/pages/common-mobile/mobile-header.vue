<template>
  <header id="mobile-header">
    <div class="header-left">
      <slot name="left">
        <button
          type="button"
          class="btn btn-header"
          @click="$emit('back')"
        >
          <img
            src="/booking-mobile/arrow-left.svg"
            class="header-icon"
            alt="Back"
          />
        </button>
      </slot>
    </div>

    <div class="header-middle">
      <slot />
    </div>
  </header>
</template>

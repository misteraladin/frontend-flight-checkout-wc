<template>
  <header id="mobile-header">
    <div class="header-left">
      <slot name="left">
        <button type="button" class="btn btn-header" @click="$emit('back')">
          <!-- <img
            src="/booking-mobile/arrow-left.svg"
            class="header-icon"
            alt="Back"
          /> -->
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="header-icon"
            alt="Back"
          >
            <path
              d="M16 8C16 7.44772 15.5523 7 15 7H3.83L8.71 2.12C9.10171 1.72829 9.10059 1.09284 8.70749 0.702509C8.31635 0.314123 7.68476 0.315239 7.295 0.705005L0.707106 7.29289C0.316582 7.68342 0.316583 8.31658 0.707107 8.70711L7.29468 15.2947C7.68422 15.6842 8.31578 15.6842 8.70532 15.2947C9.0946 14.9054 9.09489 14.2743 8.70595 13.8847L3.83 9H15C15.5523 9 16 8.55229 16 8Z"
              fill="#FEFEFE"
            />
          </svg>
        </button>
      </slot>
    </div>

    <div class="header-middle">
      <slot />
    </div>
  </header>
</template>

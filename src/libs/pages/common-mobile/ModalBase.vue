<template>
  <div id="modal-base-mobile">
    <div class="modal-base-mobile__body">
      <div class="modal-base-mobile__image">
        <slot name="image"></slot>
      </div>
      <div class="modal-base-mobile__title">
        <slot name="title"></slot>
      </div>
      <slot />
      <div class="modal-base-mobile__footer">
        <slot name="footer"></slot>
      </div>
    </div>
  </div>
</template>

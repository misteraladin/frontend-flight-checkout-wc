<template>
  <div
    :class="['ma-dropdown', { 'ma-dropdown--open': isOpen }]"
    v-away="closeOptions"
    :style="{ minWidth: `calc(${elementWidth} + 1ch + 48px)` }"
    :data-tes="elementWidth"
  >
    <img
      :src="selected ? selected[asIcon] : ''"
      :alt="selected[label]"
      v-if="asIcon && selected"
      height="16"
      width="20"
    />
    <input
      type="text"
      class="ma-dropdown__input"
      :value="selectedText"
      @click="isOpen = !isOpen"
      @input="
        (e) => {
          inputSearch = (e.target! as any).value;
        }
      "
    />
    <Transition>
      <ul
        :class="[
          'ma-dropdown__list-wrapper',
          { 'ma-dropdown__list-wrapper--open': isOpen },
        ]"
        v-if="isOpen"
      >
        <li
          class="ma-dropdown__list-item"
          v-for="(opt, i) in optionProxy"
          :key="i"
          @click="selectOption(opt)"
        >
          <img
            :src="opt[asIcon]"
            :alt="opt[label]"
            v-if="asIcon"
            height="16"
            width="20"
          />
          {{ opt[label] }}
        </li>
      </ul>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import { ElSelect, ElOption } from 'element-plus';

const { options, code, label, asIcon }: any = defineProps([
  'options',
  'code',
  'label',
  'asIcon',
]);
//parse options in case value is a string
const parsedOptions = JSON.parse(options);

//reactive value to bind dropdown list
const isOpen = ref(false);

//reactive value to bind selected value
const selected = ref();

const selectedText = computed({
  get() {
    if (!selected.value) return '';
    return selected.value[code];
  },
  set(val: any) {
    selected.value = val || null;
  },
});

const selectOption = (opt: string) => {
  selectedText.value = opt;
  isOpen.value = false;
};

const inputSearch = ref('');

//proxy for option so it can be filtered
const optionProxy = computed(() => {
  if (!inputSearch.value) return parsedOptions;
  return parsedOptions.filter((opt: any) =>
    opt[label].toLowerCase().includes(inputSearch.value.toLowerCase())
  );
});

/**
 * create a custom directive to listen
 * if the user clicks outside of the component
 * while the dropdown is open, close the dropdown
 */
const vAway = {
  mounted(el: any, binding: any) {
    el.clickOutsideEvent = (event: any) => {
      if (!event.composedPath().includes(el)) {
        binding.value();
      }
    };
    document.body.addEventListener('click', el.clickOutsideEvent);
  },
  beforeUnmount(el: any) {
    document.body.removeEventListener('click', el.clickOutsideEvent);
  },
};
//binding function for v-away directive
const closeOptions = () => {
  isOpen.value = false;
};

/**
 * compute width of dropdown
 * based on the length of the longest option
 */
const elementWidth = computed(() => {
  const longest = parsedOptions.reduce((acc: string, curr: any) => {
    return curr[label].length > acc.length ? curr[label] : acc;
  }, '').length;
  if (asIcon) return longest + 1.5 + 'ch';
  return longest + 'ch';
});
</script>

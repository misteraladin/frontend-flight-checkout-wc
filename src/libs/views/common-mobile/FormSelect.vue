<template>
  <div class="form">
    <div class="form-input">
      <div class="form-input__title">
        {{ title }}
      </div>

      <div class="form-input__control" @click="isShowModal = true">
        <input type="text" :value="currentOption?.label" />

        <svg
          width="12"
          height="7"
          viewBox="0 0 12 7"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11.2946 0.294581C10.9053 -0.0946914 10.2743 -0.0950353 9.88462 0.293813L6 4.16997L2.11538 0.293812C1.72569 -0.0950355 1.09466 -0.0946913 0.705384 0.294581C0.315811 0.684154 0.315811 1.31578 0.705384 1.70535L5.29289 6.29286C5.68342 6.68338 6.31658 6.68338 6.70711 6.29286L11.2946 1.70535C11.6842 1.31578 11.6842 0.684154 11.2946 0.294581Z"
            fill="#424242"
          />
        </svg>
      </div>
    </div>

    <!-- <div class="form-input__error">
      {{ error }}
    </div> -->

    <ModalPeek
      v-model:show="isShowModal"
      class="form-select"
      @close="isShowModal = false"
    >
      <div class="form-select__title">
        {{ title }}
      </div>

      <div
        v-for="option in options"
        :key="option.value"
        class="form-select__item"
        @click="selectOption(option)"
      >
        {{ option.label }}

        <svg
          v-if="option.value === currentOption?.value"
          width="18"
          height="13"
          viewBox="0 0 18 13"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5.99991 10.17L2.53492 6.705C2.14515 6.31524 1.51356 6.31412 1.12242 6.70251C0.729321 7.09284 0.728198 7.72829 1.11992 8.12L5.29281 12.2929C5.68333 12.6834 6.31649 12.6834 6.70702 12.2929L17.2947 1.70517C17.6842 1.31571 17.6842 0.684286 17.2947 0.294834C16.9054 -0.0944891 16.2743 -0.094638 15.8847 0.294501L5.99991 10.17Z"
            fill="#323C9F"
          />
        </svg>
      </div>

      <template #footer>
        <button class="btn btn-primary" @click="isShowModal = false">
          {{ t('close') }}
        </button>
      </template>
    </ModalPeek>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import ModalPeek from './ModalPeek.vue';

interface IOption {
  value: string;
  label: string;
}
interface Props {
  title: string;
  value: string;
  options: IOption[];
  t: Function;
}
const { title, value, options, t } = defineProps<Props>();
const currentOption = ref();
const findSelectedOption = (payloadValue: string) => {
  return options.find((option: IOption) => option.value === payloadValue);
};
onMounted(() => {
  const selectedOption = findSelectedOption(value);
  currentOption.value = selectedOption;
});

const isShowModal = ref(false);

const emit = defineEmits(['update:value']);
const selectOption = (option: IOption) => {
  currentOption.value = option;

  isShowModal.value = false;
  emit('update:value', option.value);
};
</script>

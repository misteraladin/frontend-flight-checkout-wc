<template>
  <div class="form">
    <div class="form-input">
      <div class="form-input__title">
        {{ title }}
      </div>

      <div class="form-input__control">
        <input
          :type="type"
          :value="modelValue"
          @input="onInput"
          :placeholder="placeholderText"
        />

        <slot name="info"> </slot>
      </div>
    </div>

    <div v-if="error" class="form__error">
      {{ error }}
    </div>

    <div v-if="info" class="form__info">
      {{ info }}
    </div>
  </div>
</template>

<script setup lang="ts">
enum Types {
  'text',
  'tel',
  'number',
  'email',
}

interface Props {
  type: Types | any;
  title: string;
  modelValue: string;
  error?: string;
  info?: string;
  placeholderText?: string;
}

const { type, title, modelValue, error, info, placeholderText } =
  defineProps<Props>();

const emit = defineEmits(['update:modelValue']);

const onInput = (event: Event) => {
  emit('update:modelValue', (event.target as HTMLInputElement).value);
};
</script>

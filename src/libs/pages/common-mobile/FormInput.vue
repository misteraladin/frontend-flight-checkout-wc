<template>
  <div class="form">
    <div class="form-input">
      <div class="form-input__title">
        {{ title }}
      </div>

      <div class="form-input__control">
        <input
          :type="type"
          v-model="value"
          @input="emit('input', value)"
        />

        <slot name="info">
        </slot>
      </div>
    </div>

    <div  v-if="error" class="form__error">
      {{ error }}
    </div>

    <div v-if="info" class="form__info">
      {{ info }}
    </div>
  </div>
</template>

<script setup lang="ts">

enum Types {
  "text",
  "tel",
  "number",
  "email",
}

interface Props {
  type: Types | any;
  title: string;
  value: string;
  error?: string;
  info?: string;
}

const { type, title, value, error, info } = defineProps<Props>();

const emit = defineEmits(['input'])
</script>

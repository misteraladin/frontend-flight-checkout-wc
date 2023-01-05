<template>
  <div class="form form-phone">
    <!-- Phone -->
    <div v-if="type === 'contact'" class="form-phone__code">
      <div class="form-input">
        <div class="form-input__title">
          {{ title }}
        </div>

        <div class="form-input__control" @click="isShowModal = true">
          <img
            v-if="currentCountry"
            :src="`data:image.png;base64,${currentCountry?.flag}`"
            :alt="currentCountry?.country_name"
          />

          <input type="text" :value="`+ ${currentCountry?.calling_code}`" />

          <svg
            width="22"
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
    </div>

    <div v-if="type === 'contact'" class="form-phone__number">
      <div class="form-input">
        <div class="form-input__title">
          {{ t('phone_number') }}
        </div>

        <div class="form-input__control">
          <input
            type="number"
            v-model="number"
            @input="emit('input', number?.toString())"
          />
        </div>
      </div>

      <!-- <div class="form-input__error">
        {{ error }}
      </div> -->
    </div>

    <!-- Citizenship -->
    <div v-if="type !== 'contact'" class="form-phone__citizenship">
      <div class="form-input">
        <div class="form-input__title">
          {{ title }}
        </div>

        <div class="form-input__control" @click="isShowModal = true">
          <input
            type="text"
            :value="currentCountry?.country_name"
            @input="emit('input', code)"
          />

          <svg
            width="22"
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
    </div>

    <CountryCode
      v-if="isShowModal"
      :countries="countries"
      :value="currentCountry"
      :with-country-code="withCountryCode"
      :t="t"
      @select="selectCountry"
      @close="isShowModal = false"
    />
  </div>
</template>

<script setup lang="ts">
import countries from '../country-code.json';
import { ref, computed, onMounted } from 'vue';
import CountryCode from './CountryCode.vue';

interface Props {
  title: string;
  type: string;
  code: string;
  number?: string;
  t: Function;
}
const { title, type, code, number, t } = defineProps<Props>();

const currentCountry = ref();
const findSelectedCountry = (payloadCode: string) => {
  const result = countries.find((country) => {
    if (!payloadCode) return false;

    const countryCode = country.country_code;
    const callingCode = country.calling_code
      ? country.calling_code.toString()
      : '';

    return (
      countryCode.includes(payloadCode) || callingCode.includes(payloadCode)
    );
  });

  return result === undefined ? null : result;
};
onMounted(() => {
  const selectedCountry: any = findSelectedCountry(code);
  currentCountry.value = selectedCountry;
});

const isShowModal = ref(false);

const withCountryCode = computed(() => {
  return type === 'contact';
});

const emit = defineEmits(['select-country', 'input']);
const selectCountry = (payload: any) => {
  currentCountry.value = payload;
  isShowModal.value = false;

  const code: string =
    type === 'contact' ? payload.calling_code.toString() : payload.country_code;
  emit('select-country', code);
};
</script>

<template>
  <ModalWindow
    :show="show"
    @update:show="emit('update:show')"
    @close="emit('close')"
    :title="t('select_country')"
  >
    <template #header>
      {{ t('select_country') }}
    </template>

    <div class="form-country__input">
      <div class="form-input">
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12.5879 11.0881C12.5316 11.0317 12.4552 11 12.3756 11H11.71L11.43 10.73C12.41 9.59 13 8.11 13 6.5C13 2.91 10.09 0 6.5 0C2.91 0 0 2.91 0 6.5C0 10.09 2.91 13 6.5 13C8.11 13 9.59 12.41 10.73 11.43L11 11.71V12.3756C11 12.4552 11.0317 12.5316 11.0881 12.5879L15.2929 16.7843C15.6835 17.1742 16.3162 17.1738 16.7064 16.7836L16.7836 16.7064C17.1738 16.3162 17.1742 15.6835 16.7843 15.2929L12.5879 11.0881ZM6.5 11C4.01 11 2 8.99 2 6.5C2 4.01 4.01 2 6.5 2C8.99 2 11 4.01 11 6.5C11 8.99 8.99 11 6.5 11Z"
            fill="#424242"
          />
        </svg>

        <input
          type="text"
          v-model.trim="query"
          :placeholder="t('enter_country_name')"
        />
      </div>
    </div>

    <div class="form-country__list">
      <div v-for="country in filteredCountries" :key="country.country_id">
        <div
          v-if="country.calling_code && country.flag"
          @click="emit('select', country)"
          class="form-country__item"
        >
          <div class="form-country__item-text">
            <img
              :src="`data:image.png;base64,${country.flag}`"
              :alt="country.country_name"
            />
            <span>{{ country.country_name }}</span>
            <span v-if="withCountryCode">(+{{ country.calling_code }})</span>
          </div>

          <svg
            v-if="country === value"
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
      </div>
    </div>
  </ModalWindow>
</template>

<script setup lang="ts">
import ModalWindow from './ModalWindow.vue';
import { computed, ref } from 'vue';

interface ICountry {
  country_id: number;
  country_code: string;
  country_name: string;
  currency_default: string;
  calling_code: number | null;
  flag: string | null;
}
interface Props {
  countries: ICountry[] | any;
  value: ICountry | {};
  withCountryCode: boolean;
  t: Function;
  show: boolean;
}
const { countries, value, withCountryCode, t, show } = defineProps<Props>();

const query = ref('');
const filteredCountries = computed(() => {
  if (!query.value) return countries;

  return countries.filter((country: ICountry) => {
    const countryName = country.country_name.toLowerCase();
    const callingCode = country.calling_code
      ? country.calling_code.toString()
      : '';
    return (
      countryName.includes(query.value) || callingCode.includes(query.value)
    );
  });
});
const emit = defineEmits(['close', 'select', 'update:show']);
</script>

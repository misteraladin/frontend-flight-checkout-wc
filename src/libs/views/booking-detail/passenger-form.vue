<template>
  <div id="passenger-form">
    <h3>{{ title }}</h3>

    <FormSelect
      :title="t('title')"
      :value="passenger.title"
      :options="titleOption"
      :t="t"
      @input="(val) => (passenger.title = val)"
    />

    <FormInput
      type="text"
      :title="t('first_name')"
      :value="passenger.firstName"
      @input="(val) => (passenger.firstName = val)"
    >
      <template #info>
        <FormInputInfo type="Name" :t="t" />
      </template>
    </FormInput>

    <FormInput
      type="text"
      :title="t('middle_name')"
      :value="passenger.middleName"
      @input="(val) => (passenger.middleName = val)"
    />

    <FormInput
      type="text"
      :title="t('last_name')"
      :value="passenger.lastName"
      @input="(val) => (passenger.lastName = val)"
    />

    <!-- contact -->
    <FormInput
      v-if="type === 'contact'"
      type="email"
      :title="t('email')"
      :value="passenger.email"
      @input="(val) => (passenger.email = val)"
    />

    <FormPhone
      v-if="type === 'contact'"
      :title="t('country_code')"
      :type="type"
      :code="passenger.phoneCode"
      :number="passenger.phoneNumber"
      :t="t"
      @input="(val) => (passenger.phoneNumber = val)"
      @select-country="(val) => (passenger.phoneCode = val)"
    />

    <!-- passenger -->
    <FormPhone
      v-if="type !== 'contact'"
      :title="t('citizenship')"
      :type="type"
      :code="passenger.nationality"
      :t="t"
      @select-country="(val) => (passenger.nationality = val)"
    />

    <!-- Adult -->
    <FormDate
      v-if="type === 'adult'"
      :title="t('date_of_birth')"
      :value="passenger.dob"
      @input="(val) => (passenger.phoneCode = val)"
    />

    <!-- Child -->
    <FormDate
      v-if="type === 'child'"
      :title="t('date_of_birth')"
      :value="passenger.dob"
      :info="t('passenger_child_info')"
      @input="(val) => (passenger.phoneCode = val)"
    />

    <!-- Infant -->
    <FormDate
      v-if="type === 'infant'"
      :title="t('date_of_birth')"
      :value="passenger.dob"
      :info="t('passenger_infant_info')"
      @input="(val) => (passenger.phoneCode = val)"
    />

    <FormSelect
      v-if="type !== 'contact'"
      :title="t('indentity_type')"
      :value="passenger.idType"
      :options="identityOptions"
      :t="t"
      @input="(val) => (passenger.idType = val)"
    />

    <!-- NIK -->
    <FormInput
      v-if="passenger.idType === 'NIK'"
      type="number"
      :title="titleIdentity"
      :value="passenger.idNo"
      :info="t('identity_number_child')"
    />

    <!-- Passport -->
    <FormInput
      v-if="passenger.idType === 'Passport'"
      type="number"
      :title="titleIdentity"
      :value="passenger.idNo"
    >
      <template #info>
        <FormInputInfo type="Passport" :t="t" />
      </template>
    </FormInput>
    <FormDate
      v-if="passenger.idType === 'Passport'"
      :title="t('passport_expiration_date')"
      :value="passenger.idExpiry"
      :info="t('passport_expiration_info')"
      @input="(val) => (passenger.idExpiry = val)"
    />
    <FormPhone
      v-if="passenger.idType === 'Passport'"
      :title="t('passport_issuing_country')"
      :type="type"
      :code="passenger.idOrigin"
      :t="t"
      @select-country="(val) => (passenger.idOrigin = val)"
    />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { Passenger as IPassenger, Contact as IContact } from './types';
import FormInput from '../common-mobile/FormInput.vue';
import FormSelect from '../common-mobile/FormSelect.vue';
import FormInputInfo from '../common-mobile/FormInputInfo.vue';
import FormPhone from '../common-mobile/FormPhone.vue';
import FormDate from '../common-mobile/FormDate.vue';

interface Props {
  type: string;
  passenger: IPassenger & IContact;
  t: any;
}
const { type, passenger, t } = defineProps<Props>();

const title = computed(() => {
  const titleGlossary: any = {
    contact: t('customer_data'),
    adult: `${t('passenger_data')} - ${t('adult')}`,
    child: `${t('passenger_data')} - ${t('child')}`,
    infant: `${t('passenger_data')} - ${t('infant')}`,
  };
  return titleGlossary[type];
});

const titleOption = computed(() => {
  const adult = [
    { value: 'Mr', label: t('mr') },
    { value: 'Mrs', label: t('mrs') },
    { value: 'Ms', label: t('ms') },
  ];
  const child = [
    { value: 'mr', label: t('mr') },
    { value: 'ms', label: t('ms') },
  ];
  const titleOptionGlossary: any = {
    contact: adult, // contact
    adult, // passenger adult
    child, // passenger child
    infant: child, // passenger infant
  };

  return titleOptionGlossary[type];
});

const identityOptions = computed(() => {
  return [
    { value: 'NIK', label: t('nik') },
    { value: 'Passport', label: t('passport') },
  ];
});

const titleIdentity = computed(() => {
  const glossary: any = {
    NIK: t('identity_number'),
    Passport: t('passport_number'),
  };
  const result: string = glossary[passenger.idType];
  return result;
});

const selectDemo = (payload: any) => {
  console.log('payload selectDemo', payload);
};
</script>

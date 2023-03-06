<template>
  <div id="passenger-form">
    <h3>{{ title }}</h3>

    <FormSelect
      :title="t('title')"
      v-model:value="validation.title.$model"
      :options="titleOption"
      :t="t"
    />

    <FormInput
      type="text"
      :title="t('first_name')"
      v-model="validation.firstName.$model"
      :error="validation.firstName.$errors[0]?.$message"
    >
      <template #info>
        <FormInputInfo type="Name" :t="t" />
      </template>
    </FormInput>

    <FormInput
      type="text"
      :title="t('middle_name')"
      v-model="validation.middleName.$model"
      :error="validation.middleName.$errors[0]?.$message"
    />

    <FormInput
      type="text"
      :title="t('last_name')"
      v-model="validation.lastName.$model"
      :error="validation.lastName.$errors[0]?.$message"
    />

    <!-- contact -->
    <FormInput
      v-if="type === 'contact'"
      type="email"
      :title="t('email')"
      v-model="validation.email.$model"
      :error="validation.email.$errors[0]?.$message"
    />

    <FormPhone
      v-if="type === 'contact'"
      :title="t('country_code')"
      :type="type"
      :code="validation.phoneCode.$model"
      v-model:number="validation.phoneNumber.$model"
      :t="t"
      @select-country="(val) => (validation.phoneCode.$model = val)"
      :error="validation.phoneCode.$errors[0]?.$message"
    />

    <!-- passenger -->
    <FormPhone
      v-if="type !== 'contact'"
      :title="t('citizenship')"
      :type="type"
      :code="validation.nationality.$model"
      :t="t"
      @select-country="(val) => (validation.nationality.$model = val)"
      :error="validation.nationality.$errors[0]?.$message"
    />

    <!-- Adult -->
    <FormDate
      v-if="type === 'adult'"
      :title="t('date_of_birth')"
      v-model:value="validation.dob.$model"
      :error="validation.dob.$errors[0]?.$message"
      :date-validity="dateValidity"
      type="adult"
    />

    <!-- Child -->
    <FormDate
      v-if="type === 'child'"
      :title="t('date_of_birth')"
      v-model:value="validation.dob.$model"
      :info="t('passenger_child_info')"
      :error="validation.dob.$errors[0]?.$message"
      :date-validity="dateValidity"
      type="child"
    />

    <!-- Infant -->
    <FormDate
      v-if="type === 'infant'"
      :title="t('date_of_birth')"
      v-model:value="validation.dob.$model"
      :info="t('passenger_infant_info')"
      :error="validation.dob.$errors[0]?.$message"
      :date-validity="dateValidity"
      type="infant"
    />

    <!-- <FormSelect
      v-if="type !== 'contact'"
      :title="t('indentity_type')"
      v-model:value="validation.idType.$model"
      :options="identityOptions"
      :t="t"
      :error="validation.idType.$errors[0]?.$message"
    /> -->

    <!-- NIK -->
    <FormInput
      v-if="passenger.idType === 'NIK'"
      type="number"
      :title="titleIdentity"
      v-model="validation.idNo.$model"
      :info="t('identity_number_child')"
      :error="validation.idNo.$errors[0]?.$message"
    />

    <!-- Passport -->
    <FormInput
      v-if="passenger.idType === 'Passport'"
      type="number"
      :title="titleIdentity"
      v-model="validation.idNo.$model"
      :error="validation.idNo.$errors[0]?.$message"
    >
      <template #info>
        <FormInputInfo type="Passport" :t="t" />
      </template>
    </FormInput>
    <FormDate
      v-if="passenger.idType === 'Passport'"
      :title="t('passport_expiration_date')"
      v-model:value="validation.idExpiry.$model"
      :info="t('passport_expiration_info')"
      :error="validation.idExpiry.$errors[0]?.$message"
    />
    <FormPhone
      v-if="passenger.idType === 'Passport'"
      :title="t('passport_issuing_country')"
      :type="type"
      :code="validation.idOrigin.$model"
      :t="t"
      @select-country="(val) => (validation.idOrigin.$model = val)"
      :error="validation.idOrigin.$errors[0]?.$message"
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
  validation: any;
  dateValidity: {
    minDate: string;
    maxDate: string;
  };
}
const { type, passenger, t, validation, dateValidity } = defineProps<Props>();

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
    { value: 'Mr', label: t('mr') },
    { value: 'Ms', label: t('ms') },
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

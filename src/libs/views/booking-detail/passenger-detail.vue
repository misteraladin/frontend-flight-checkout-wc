<template>
  <div class="booking__main booking__passenger">
    <h3 class="booking__passenger-header">{{ i }}. {{ heading }}</h3>
    <div class="booking__main-column-4">
      <InputGroup :label="t('FORM.TITLE')">
        <Dropdown
          :options="JSON.stringify(titleOptions)"
          v-model="v.title.$model"
          label="label"
          value="code"
        />
      </InputGroup>
      <InputGroup
        :label="t('FORM.FIRST')"
        :error="v.$dirty && v.firstName.$errors[0]?.$message"
      >
        <Input
          type="text"
          name="first-name"
          v-model="v.firstName.$model"
        ></Input>
      </InputGroup>
      <InputGroup
        :label="t('FORM.MIDDLE')"
        :error="v.$dirty && v.middleName.$errors[0]?.$message"
      >
        <Input
          type="text"
          name="middle-name"
          v-model="v.middleName.$model"
        ></Input>
      </InputGroup>
      <InputGroup
        :label="t('FORM.LAST')"
        :error="v.$dirty && v.lastName.$errors[0]?.$message"
      >
        <Input type="text" name="last-name" v-model="v.lastName.$model"></Input>
      </InputGroup>
    </div>

    <ul class="booking__information" v-html="t('FORM.INFORMATION')"></ul>

    <div class="booking__main-column-2">
      <InputGroup
        :label="t('FORM.NATIONALITY')"
        :error="v.$dirty && v.nationality.$errors[0]?.$message"
      >
        <Dropdown
          :options="JSON.stringify(countries)"
          v-model="v.nationality.$model"
          label="CountryName"
          value="CountryCode"
          style="min-width: unset !important"
        />
      </InputGroup>
      <InputGroup
        :label="t('FORM.DOB')"
        :error="v.$dirty && v.dob.$errors[0]?.$message"
        :info="type === 'adult' ? '' : t(`PAX_DOB_INFO.${type}`)"
      >
        <Calendar v-model="v.dob.$model" :t="t" :disabledDate="disabledDate" />
      </InputGroup>
    </div>
    <div class="booking__main-column-2">
      <!-- <InputGroup
        :label="t('FORM.IDTYPE')"
        :error="v.$dirty && v.idType.$errors[0]?.$message"
      >
        <Dropdown
          :options="
            JSON.stringify([
              { code: 'NIK', label: t('nik') },
              { code: 'Passport', label: t('passport') },
            ])
          "
          v-model="v.idType.$model"
          label="label"
          value="code"
        />
      </InputGroup> -->
      <InputGroup
        :label="t('FORM.IDNO')"
        v-if="v.idType.$model === 'NIK'"
        :error="v.$dirty && v.idNo.$errors[0]?.$message"
      >
        <Input
          type="number"
          name="first-name"
          :placeholder="t('FORM.NIK_PLACEHOLDER')"
          v-model="v.idNo.$model"
        ></Input>
      </InputGroup>
      <!-- <div v-if="v.idType.$model !== 'NIK'"></div> -->
      <InputGroup
        :label="t('FORM.PASSNO')"
        v-if="v.idType.$model !== 'NIK'"
        :error="v.$dirty && v.idNo.$errors[0]?.$message"
      >
        <Input
          type="text"
          name="first-name"
          :placeholder="t('FORM.PASSNO_PLACEHOLDER')"
          v-model="v.idNo.$model"
        ></Input>
      </InputGroup>
      <InputGroup
        :label="t('FORM.DOE')"
        v-if="v.idType.$model !== 'NIK'"
        :error="v.$dirty && v.idExpiry.$errors[0]?.$message"
      >
        <Calendar
          v-model="v.idExpiry.$model"
          :t="t"
          :disabledDate="disabledDatePassport"
        />
      </InputGroup>
      <InputGroup :label="t('FORM.COI')" v-if="v.idType.$model !== 'NIK'">
        <Dropdown
          :options="JSON.stringify(countries)"
          v-model="v.idOrigin.$model"
          label="CountryName"
          value="CountryCode"
          style="min-width: unset !important"
        />
      </InputGroup>
      <span class="passport-warning" v-if="v.idType.$model !== 'NIK'">{{
        t('FORM.PASSPORT_NOTICE')
      }}</span>
    </div>
    <span
      v-if="type !== 'adult' && v.idType.$model === 'NIK'"
      :style="{
        fontSize: '12px',
        fontWeight: '500' as any,
      }"
      >{{ t('PAX_ID_INFO') }}
    </span>
  </div>
</template>

<script setup lang="ts">
import Input from '../../atoms/inputs/input.vue';
import Dropdown from '../../atoms/inputs/dropdown.vue';
import InputGroup from '../../atoms/inputs/input-group.vue';
import Calendar from '../../atoms/inputs/calendar.vue';
import { helpers, required, minLength, maxLength } from '@vuelidate/validators';

import { computed, reactive } from 'vue';
import { CountryCode } from './types';
import useVuelidate from '@vuelidate/core';
import { ComposerTranslation } from 'vue-i18n';

interface Props {
  i: number;
  type: 'adult' | 'child' | 'infant';
  t: ComposerTranslation;
  countries: CountryCode[];
  model: {
    title: string;
    firstName: string;
    middleName: string;
    lastName: string;
    phoneCode: string;
    phoneNumber: string;
    email: string;
    idType: string;
    idNo: string;
  };
  dateValidity: {
    minDate: string;
    maxDate: string;
  };
  dateArrival: string;
}

const { i, type, t, model, dateValidity, dateArrival } = defineProps<Props>();

const titleOptions = computed(() => {
  const adult = [
    { code: 'Mr', label: t('PASSENGER.MR') },
    { code: 'Mrs', label: t('PASSENGER.MRS') },
    { code: 'Ms', label: t('PASSENGER.MS') },
  ];
  const child = [
    { code: 'Mstr', label: t('PASSENGER.MSTR') },
    { code: 'Ms', label: t('PASSENGER.MS') },
  ];
  const titleOptionGlossary: any = {
    adult, // passenger adult
    child, // passenger child
    infant: child, // passenger infant
  };

  return titleOptionGlossary[type];
});

const heading = computed(
  () =>
    ({
      adult: t('passenger_adult'),
      child: t('passenger_child'),
      infant: t('passenger_infant'),
    }[type])
);

const rules = computed(() => {
  const baseRule: any = {
    title: {},
    firstName: {
      required: helpers.withMessage(t('VALIDATION.REQUIRED'), required),
      minLength: helpers.withMessage(t('VALIDATION.NAME'), minLength(1)),
      maxLength: helpers.withMessage(t('VALIDATION.NAME'), maxLength(50)),
    },
    middleName: {
      maxLength: helpers.withMessage(t('VALIDATION.MIDDLENAME'), maxLength(50)),
    },
    lastName: {
      required: helpers.withMessage(t('VALIDATION.REQUIRED'), required),
      minLength: helpers.withMessage(t('VALIDATION.NAME'), minLength(1)),
      maxLength: helpers.withMessage(t('VALIDATION.NAME'), maxLength(50)),
    },
    nationality: {
      required: helpers.withMessage(t('VALIDATION.REQUIRED'), required),
    },
    dob: {
      required: helpers.withMessage(t('VALIDATION.REQUIRED'), required),
    },
    idType: {
      required: helpers.withMessage(t('VALIDATION.REQUIRED'), required),
    },
  };

  if (model.idType !== 'NIK') {
    baseRule.idOrigin = {
      required: helpers.withMessage(t('VALIDATION.REQUIRED'), required),
    };
    baseRule.idExpiry = {
      required: helpers.withMessage(t('VALIDATION.REQUIRED'), required),
    };
    baseRule.idNo = {
      required: helpers.withMessage(t('VALIDATION.REQUIRED'), required),
      minLength: helpers.withMessage(t('VALIDATION.PASSPORT'), minLength(6)),
      maxLength: helpers.withMessage(t('VALIDATION.PASSPORT'), maxLength(10)),
    };
  } else {
    baseRule.idNo = {
      required: helpers.withMessage(t('VALIDATION.REQUIRED'), required),
      minLength: helpers.withMessage(t('VALIDATION.NIK'), minLength(16)),
      maxLength: helpers.withMessage(t('VALIDATION.NIK'), maxLength(16)),
    };
  }
  return baseRule;
});

const v = useVuelidate(rules, model);

const disabledDate = (a: any) => {
  const minDate = new Date(dateValidity.minDate);
  const maxDate = new Date(dateValidity.maxDate);

  if (type === 'adult') {
    const mustBeTwelve = new Date(dateValidity.minDate);
    mustBeTwelve.setFullYear(minDate.getFullYear() - 12);
    return a > mustBeTwelve;
  } else if (type === 'child') {
    const beforeTwelve = new Date(dateValidity.minDate);
    beforeTwelve.setFullYear(minDate.getFullYear() - 12);
    const afterTwo = new Date(dateValidity.maxDate);
    afterTwo.setFullYear(maxDate.getFullYear() - 2);
    if (a < beforeTwelve) return true;
    if (a > afterTwo) return true;
  } else if (type === 'infant') {
    const beforeTwo = new Date(dateValidity.minDate);
    beforeTwo.setFullYear(minDate.getFullYear() - 2);
    const afterNow = new Date(dateValidity.maxDate);
    afterNow.setDate(maxDate.getDate() - 7);
    if (a < beforeTwo) return true;
    if (a > afterNow) return true;
  }
  return false;
};

// const disabledDate = (a: any) => {
//   const minDate = new Date(dateValidity.minDate);
//   const maxDate = new Date(dateValidity.maxDate);

//   if (type === 'adult') {
//     return a.getFullYear() - 12 < minDate.getFullYear();
//   } else if (type === 'child') {
//     return (
//       a.getFullYear() - 12 < minDate.getFullYear() ||
//       a.getFullYear() - 2 > maxDate.getFullYear()
//     );
//   } else if (type === 'infant') {
//     return (
//       a.getFullYear() - 2 < minDate.getFullYear() ||
//       (a.getFullYear() > maxDate.getFullYear() &&
//         a.getDate() - 7 > maxDate.getDate())
//     );
//   }
//   return false;
// };

const disabledDatePassport = (a: any) => {
  const today = new Date(dateArrival);
  const after = new Date(today.setMonth(today.getMonth() + 6));
  return a < after;
};
</script>

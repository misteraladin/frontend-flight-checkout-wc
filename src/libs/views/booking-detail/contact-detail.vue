<template>
  <Card>
    <template v-slot:header>
      <span>{{ t('CONTACT_DETAILS') }}</span>
    </template>
    <div class="booking__main">
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
          prop="contact.firstName"
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
          <Input
            type="text"
            name="last-name"
            v-model="v.lastName.$model"
          ></Input>
        </InputGroup>
      </div>

      <ul class="booking__information" v-html="t('FORM.INFORMATION')"></ul>
      <InputGroup
        :label="t('FORM.TELP')"
        :error="v.$dirty && v.phoneNumber.$errors[0]?.$message"
      >
        <ElInput
          v-model="v.phoneNumber.$model"
          :class="['ma-input']"
          style="--el-color-primary: #323c9f"
        >
          <template #prepend>
            <Dropdown
              :options="JSON.stringify(countries)"
              v-model="v.phoneCode.$model"
              label="CodeTelp"
              value="CodeTelp"
              style="width: 140px"
              :use-option-slot="true"
            >
              <template v-slot:prefix>
                <img
                  class="country-flag"
                  :src="getSelectedPhoneCodeFlag!.Image"
                  alt=""
                />
              </template>
              <template v-slot:options>
                <ElOption
                  v-for="opt in countries"
                  :key="opt.CodeTelp"
                  :label="`+ ${opt.CodeTelp}`"
                  :value="opt.CodeTelp"
                >
                  <div style="display: flex; gap: 10px; align-items: center">
                    <img
                      class="country-flag"
                      :src="opt.Image"
                      alt=""
                      style="height: 16px; width: 24px"
                    />
                    <span>+ {{ opt.CodeTelp }}</span>
                  </div>
                </ElOption>
              </template>
            </Dropdown>
          </template>
        </ElInput>
      </InputGroup>
      <InputGroup
        :label="t('FORM.EMAIL')"
        :error="v.$dirty && v.email.$errors[0]?.$message"
      >
        <Input
          type="text"
          name="first-name"
          placeholder="email@domain.com"
          v-model="v.email.$model"
        ></Input>
      </InputGroup>
    </div>
  </Card>
</template>

<script lang="ts" setup>
import { computed, reactive } from 'vue';
import { ComposerTranslation } from 'vue-i18n';
import useVuelidate from '@vuelidate/core';
import {
  helpers,
  required,
  minLength,
  maxLength,
  email,
} from '@vuelidate/validators';
import { CountryCode } from './types';

import Card from '../../atoms/cards/card.vue';
import Input from '../../atoms/inputs/input.vue';
import Dropdown from '../../atoms/inputs/dropdown.vue';
import InputGroup from '../../atoms/inputs/input-group.vue';
import { ElInput, ElOption } from 'element-plus';

interface Props {
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
  };
  user?: {
    Email: string;
    FullName: string;
    IsLogin: boolean;
    MAToken: string;
    MemberId: string;
    PhoneCountry: string;
    PhoneNumer: string;
    PhoneOriginal: string;
  };
}

const { t, countries, model } = defineProps<Props>();

const titleOptions = computed(() => [
  { code: 'Mr', label: t('PASSENGER.MR') },
  { code: 'Mrs', label: t('PASSENGER.MRS') },
  { code: 'Ms', label: t('PASSENGER.MS') },
]);

const getSelectedPhoneCodeFlag = computed(() => {
  return countries.find((cty: CountryCode) => cty.CodeTelp === model.phoneCode);
});

const vrules = computed(() => ({
  title: {
    required: helpers.withMessage(t('VALIDATION.REQUIRED'), required),
  },
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
  phoneCode: {
    required: helpers.withMessage(t('VALIDATION.REQUIRED'), required),
  },
  phoneNumber: {
    required: helpers.withMessage(t('VALIDATION.REQUIRED'), required),
    minLength: helpers.withMessage(t('VALIDATION.PHONE_MIN'), minLength(9)),
    maxLength: helpers.withMessage(t('VALIDATION.PHONE_MAX'), maxLength(13)),
  },
  email: {
    required: helpers.withMessage(t('VALIDATION.REQUIRED'), required),
    email: helpers.withMessage(t('VALIDATION.EMAIL'), email),
  },
}));

const v = useVuelidate(vrules, model);

console.log(v.value);
</script>

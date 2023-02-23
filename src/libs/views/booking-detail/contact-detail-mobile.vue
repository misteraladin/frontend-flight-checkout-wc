<template>
  <div class="booking-detail__passenger">
    <div class="booking-detail__passenger-empty" @click="isShowModal = true">
      <template v-if="type === 'contact'">
        <template v-if="v.$error || !v.$dirty || !isLoggedIn">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.8 4.66667C14.0667 4.4 14.0667 4 13.8 3.73333L12.2667 2.2C12.1333 2.06667 11.9333 2 11.8 2C11.6667 2 11.4 2.06667 11.3333 2.2L10.1333 3.4L12.6 5.93333L13.8 4.66667Z"
              :fill="v.$error ? '#dd2c00' : '#323C9F'"
            />
            <path
              d="M2 11.4667V14H4.53333L11.8667 6.6L9.4 4.13333L2 11.4667Z"
              :fill="v.$error ? '#dd2c00' : '#323C9F'"
            />
          </svg>

          <span :style="v.$error && { color: '#dd2c00' }">{{
            placeholder
          }}</span>
        </template>
        <template v-else>
          <div
            :style="{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              width: '100%',
            }"
          >
            <div style="color: #757575; font-size: 12px">
              <p style="color: #424242; text-transform: capitalize">
                {{ t(`PASSENGER.${passenger.title.toUpperCase()}`) }}
                {{ passenger.firstName }} {{ passenger.middleName }}
                {{ passenger.lastName }}
              </p>
              <p>
                {{ passenger.email }}
              </p>
              <p>
                {{ '+' + passenger.phoneCode + passenger.phoneNumber }}
              </p>
            </div>
            <div style="display: flex; align-items: center">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.8 4.66667C14.0667 4.4 14.0667 4 13.8 3.73333L12.2667 2.2C12.1333 2.06667 11.9333 2 11.8 2C11.6667 2 11.4 2.06667 11.3333 2.2L10.1333 3.4L12.6 5.93333L13.8 4.66667Z"
                  :fill="v.$error ? '#dd2c00' : '#323C9F'"
                />
                <path
                  d="M2 11.4667V14H4.53333L11.8667 6.6L9.4 4.13333L2 11.4667Z"
                  :fill="v.$error ? '#dd2c00' : '#323C9F'"
                />
              </svg>

              <span :style="v.$error && { color: '#dd2c00' }">{{
                t('CHANGE')
              }}</span>
            </div>
          </div>
        </template>
      </template>
      <template v-else>
        <template v-if="v.$error || !v.$dirty || !isLoggedIn">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.8 4.66667C14.0667 4.4 14.0667 4 13.8 3.73333L12.2667 2.2C12.1333 2.06667 11.9333 2 11.8 2C11.6667 2 11.4 2.06667 11.3333 2.2L10.1333 3.4L12.6 5.93333L13.8 4.66667Z"
              :fill="v.$error ? '#dd2c00' : '#323C9F'"
            />
            <path
              d="M2 11.4667V14H4.53333L11.8667 6.6L9.4 4.13333L2 11.4667Z"
              :fill="v.$error ? '#dd2c00' : '#323C9F'"
            />
          </svg>

          <span :style="v.$error && { color: '#dd2c00' }">{{
            placeholder
          }}</span>
        </template>
        <template v-else>
          <div
            :style="{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              width: '100%',
            }"
          >
            <div style="color: #757575; font-size: 12px">
              <p style="color: #424242; text-transform: capitalize">
                {{ placeholder.split(' ')[0] }}
                {{ t(`PASSENGER.${passenger.title.toUpperCase()}`) }}
                {{ passenger.firstName }} {{ passenger.middleName }}
                {{ passenger.lastName }}
              </p>
            </div>
            <div style="display: flex; align-items: center">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.8 4.66667C14.0667 4.4 14.0667 4 13.8 3.73333L12.2667 2.2C12.1333 2.06667 11.9333 2 11.8 2C11.6667 2 11.4 2.06667 11.3333 2.2L10.1333 3.4L12.6 5.93333L13.8 4.66667Z"
                  :fill="v.$error ? '#dd2c00' : '#323C9F'"
                />
                <path
                  d="M2 11.4667V14H4.53333L11.8667 6.6L9.4 4.13333L2 11.4667Z"
                  :fill="v.$error ? '#dd2c00' : '#323C9F'"
                />
              </svg>

              <span :style="v.$error && { color: '#dd2c00' }">{{}}</span>
            </div>
          </div>
        </template>
      </template>
    </div>

    <ModalPeek
      v-model:show="isShowModal"
      @close="isShowModal = false"
      :customStyle="height ? { maxHeight: `${height - 56}px` } : {}"
    >
      <div id="passenger-form">
        <h3>{{ title }}</h3>

        <FormSelect
          :title="t('title')"
          v-model:value="v.title.$model"
          :options="titleOption"
          :t="t"
        />

        <FormInput
          type="text"
          :title="t('first_name')"
          :error="v.$dirty && v.firstName.$errors[0]?.$message"
          v-model="v.firstName.$model"
        >
          <template #info>
            <FormInputInfo type="Name" :t="t" />
          </template>
        </FormInput>

        <FormInput
          type="text"
          :title="t('middle_name')"
          :error="v.$dirty && v.middleName.$errors[0]?.$message"
          v-model="v.middleName.$model"
        />

        <FormInput
          type="text"
          :title="t('last_name')"
          :error="v.$dirty && v.lastName.$errors[0]?.$message"
          v-model="v.lastName.$model"
        />

        <!-- contact -->
        <FormInput
          type="text"
          :title="t('email')"
          :error="v.$dirty && v.email.$errors[0]?.$message"
          v-model="v.email.$model"
        />

        <FormPhone
          :title="t('country_code')"
          :type="'contact'"
          :code="v.phoneCode.$model"
          v-model:number="v.phoneNumber.$model"
          :t="t"
          @select-country="(val) => (v.phoneCode.$model = val)"
          :error="v.phoneNumber.$errors[0]?.$message"
        />
      </div>

      <template #footer>
        <button class="btn btn-primary-outline" @click="isShowModal = false">
          {{ t('cancel') }}
        </button>

        <button class="btn btn-primary" @click="onSave">
          {{ t('save') }}
        </button>
      </template>
    </ModalPeek>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import ModalPeek from '../common-mobile/ModalPeek.vue';
import FormInput from '../common-mobile/FormInput.vue';
import FormSelect from '../common-mobile/FormSelect.vue';
import FormInputInfo from '../common-mobile/FormInputInfo.vue';
import FormPhone from '../common-mobile/FormPhone.vue';

import useVuelidate from '@vuelidate/core';
import {
  helpers,
  required,
  minLength,
  maxLength,
  email,
} from '@vuelidate/validators';
import { ComposerTranslation } from 'vue-i18n';

interface Props {
  type: string;
  passenger: {
    title: string;
    firstName: string;
    middleName: string;
    lastName: string;
    phoneCode: string;
    phoneNumber: string;
    email: string;
  };
  placeholder: string;
  t: ComposerTranslation;
  height?: number;
  isLoggedIn: boolean;
}
const { type, passenger, placeholder, t, height, isLoggedIn } =
  defineProps<Props>();
const isShowModal = ref(false);

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

const v = useVuelidate(vrules, passenger);

const onSave = async () => {
  const isValid = await v.value.$validate();

  if (isValid) {
    isShowModal.value = false;
  }
};
</script>

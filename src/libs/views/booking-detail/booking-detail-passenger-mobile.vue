<template>
  <div class="booking-detail__passenger">
    <div class="booking-detail__passenger-empty" @click="togleModal(true)">
      <template v-if="type === 'contact'">
        <template v-if="v.$error || !v.$dirty">
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

              <span :style="v.$error && { color: '#dd2c00' }">{{t('CHANGE')}}</span>
            </div>
          </div>
        </template>
      </template>
      <template v-else>
        <template v-if="v.$error || !v.$dirty">
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

              <span :style="v.$error && { color: '#dd2c00' }">{{ t('CHANGE') }}</span>
            </div>
          </div>
        </template>
      </template>
    </div>

    <ModalPeek
      v-model:show="isShowModal"
      @close="togleModal(false)"
      :customStyle="height ? { maxHeight: `${height - 56}px` } : {}"
    >
      <PassengerForm
        :type="type"
        :passenger="passenger"
        :t="t"
        :validation="v"
        :date-validity="dateValidity"
        :date-arrival="dateArrival"
        :locale="locale"
      />

      <template #footer>
        <button class="btn btn-primary-outline" @click="togleModal(false)">
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
import PassengerForm from './passenger-form.vue';

import useVuelidate from '@vuelidate/core';
import {
  helpers,
  required,
  minLength,
  maxLength,
  email,
  alphaNum,
} from '@vuelidate/validators';

interface Props {
  type: string;
  passenger: any;
  placeholder: string;
  t: any;
  height?: number;
  dateValidity: {
    minDate: string;
    maxDate: string;
  };
  dateArrival?: string;
  locale: string;
  isShowModal: boolean;
}
const { type, passenger, placeholder, t, height, dateValidity, locale, isShowModal } =
  defineProps<Props>();

const vrules = computed(() => {
  if (type === 'contact') {
    return {
      title: {
        required: helpers.withMessage(t('VALIDATION.REQUIRED'), required),
      },
      firstName: {
        required: helpers.withMessage(t('VALIDATION.REQUIRED'), required),
        minLength: helpers.withMessage(t('VALIDATION.NAME'), minLength(1)),
        maxLength: helpers.withMessage(t('VALIDATION.NAME'), maxLength(50)),
      },
      middleName: {
        maxLength: helpers.withMessage(
          t('VALIDATION.MIDDLENAME'),
          maxLength(50)
        ),
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
        maxLength: helpers.withMessage(
          t('VALIDATION.PHONE_MAX'),
          maxLength(13)
        ),
      },
      email: {
        required: helpers.withMessage(t('VALIDATION.REQUIRED'), required),
        email: helpers.withMessage(t('VALIDATION.EMAIL'), email),
      },
    };
  } else {
    const baseRule: any = {
      title: {},
      firstName: {
        required: helpers.withMessage(t('VALIDATION.REQUIRED'), required),
        minLength: helpers.withMessage(t('VALIDATION.NAME'), minLength(1)),
        maxLength: helpers.withMessage(t('VALIDATION.NAME'), maxLength(50)),
      },
      middleName: {
        maxLength: helpers.withMessage(
          t('VALIDATION.MIDDLENAME'),
          maxLength(50)
        ),
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

    if (passenger.idType !== 'NIK') {
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
        alphaNum: helpers.withMessage(t('VALIDATION.ALPHANUM'), alphaNum),
      };
    } else {
      baseRule.idNo = {
        required: helpers.withMessage(t('VALIDATION.REQUIRED'), required),
        minLength: helpers.withMessage(t('VALIDATION.NIK'), minLength(16)),
        maxLength: helpers.withMessage(t('VALIDATION.NIK'), maxLength(16)),
      };
    }
    return baseRule;
  }
});

const v = useVuelidate(vrules, passenger);

const emit = defineEmits(['setModal']);
const onSave = async () => {
  const isValid = await v.value.$validate();
  if (isValid) {
    emit('setModal', false)
  }
};

const togleModal= ( value: Boolean)=>{
  emit('setModal', value)
}
</script>

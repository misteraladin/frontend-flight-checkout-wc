<template>
  <div class="booking-detail__passenger">
    <div class="booking-detail__passenger-empty" @click="isShowModal = true">
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M13.8 4.66667C14.0667 4.4 14.0667 4 13.8 3.73333L12.2667 2.2C12.1333 2.06667 11.9333 2 11.8 2C11.6667 2 11.4 2.06667 11.3333 2.2L10.1333 3.4L12.6 5.93333L13.8 4.66667Z"
          fill="#323C9F"
        />
        <path
          d="M2 11.4667V14H4.53333L11.8667 6.6L9.4 4.13333L2 11.4667Z"
          fill="#323C9F"
        />
      </svg>

      {{ placeholder }}
    </div>

    <ModalPeek v-if="isShowModal" @close="isShowModal = false">
      <PassengerForm :type="type" :passenger="passenger" :t="t" />

      <template #footer>
        <button class="btn btn-primary-outline" @click="isShowModal = false">
          {{ t('cancel') }}
        </button>

        <button class="btn btn-primary" @click="isShowModal = false">
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
} from '@vuelidate/validators';

interface Props {
  type: string;
  passenger: any;
  placeholder: string;
  t: any;
}
const { type, passenger, placeholder, t } = defineProps<Props>();
const isShowModal = ref(false);

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
</script>

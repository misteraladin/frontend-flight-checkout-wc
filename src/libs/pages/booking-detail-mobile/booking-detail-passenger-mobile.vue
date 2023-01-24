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

    <ModalPeek v-model:show="isShowModal" @close="isShowModal = false">
      <PassengerForm :type="type" :passenger="passenger" :t="t" />

      <template #footer>
        <button class="btn btn-primary-outline" @click="isShowModal = false">
          {{ t('cancel') }}
        </button>

        <button class="btn btn-primary">
          {{ t('save') }}
        </button>
      </template>
    </ModalPeek>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import ModalPeek from '../common-mobile/ModalPeek.vue';
import PassengerForm from './passenger-form.vue';

interface Props {
  type: string;
  passenger: any;
  placeholder: string;
  t: any;
}
const { type, passenger, placeholder, t } = defineProps<Props>();
const isShowModal = ref(false);
</script>

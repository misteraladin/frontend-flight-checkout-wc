<template>
  <div class="booking__main booking__passenger">
    <h3 class="booking__passenger-header">{{ i }}. Penumpang {{ heading }}</h3>
    <div class="booking__main-column-4">
      <InputGroup :label="t('FORM.TITLE')">
        <Dropdown
          :options="
            JSON.stringify([
              { code: 'Mr', label: 'Tuan' },
              { code: 'Mrs', label: 'Nyonya' },
              { code: 'Ms', label: 'Nona' },
            ])
          "
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
        :error="v.$dirty && v.firstName.$errors[0]?.$message"
      >
        <Input type="text" name="last-name" v-model="v.lastName.$model"></Input>
      </InputGroup>
    </div>
    <ul style="display: flex; flex-direction: column; gap: 8px">
      <li
        style="
          font-family: 'Montserrat';
          font-style: normal;
          font-weight: 500;
          font-size: 12px;
          line-height: 16px;
          color: #757575;
          margin-left: 16px;
        "
      >
        Untuk WNI, nama dan NIK harus sama dengan yang terdaftar. Untuk WNA,
        gunakan nama dan nomor yang tercantum di paspor. Untuk WNA , gunakan
        nama dan nomor vang tercantum di paspor.
      </li>
      <li
        style="
          font-family: 'Montserrat';
          font-style: normal;
          font-weight: 500;
          font-size: 12px;
          line-height: 16px;
          color: #757575;
          margin-left: 16px;
        "
      >
        Jika kamu tidak memiliki "nama tengah" (contoh: Ari Wibowo), kosongkan
        bagian nama tengah dan hanya isi nama depan (contoh: Ari) dan nama akhir
        (contoh: Wibowo)
      </li>
      <li
        style="
          font-family: 'Montserrat';
          font-style: normal;
          font-weight: 500;
          font-size: 12px;
          line-height: 16px;
          color: #757575;
          margin-left: 16px;
        "
      >
        Jika kamu hanya memiliki satu nama (contoh: Kartini), harap mengosongkan
        nama tengah dan mengisi nama belakang dengan nama depan (contoh: Kartini
        Kartini).
      </li>
    </ul>
    <div class="booking__main-column-2">
      <InputGroup label="Kewarganegaraan">
        <Dropdown
          :options="JSON.stringify(countries)"
          v-model="passenger.title"
          label="CountryName"
          value="CountryCode"
          style="min-width: unset !important"
        />
      </InputGroup>
      <InputGroup label="Tanggal Lahir">
        <Calendar />
      </InputGroup>
    </div>
    <div class="booking__main-column-2">
      <InputGroup label="Tipe Identitas">
        <Dropdown
          :options="
            JSON.stringify([
              { code: 'NIK', label: 'NIK' },
              { code: 'Passport', label: 'Passpor' },
            ])
          "
          v-model="passenger.idType"
          label="label"
          value="code"
        />
      </InputGroup>
      <InputGroup label="Nomor NIK" v-if="passenger.idType === 'NIK'">
        <Input
          type="text"
          name="first-name"
          placeholder="Nomor NIK minimal 16 karakter"
        ></Input>
      </InputGroup>
      <InputGroup label="Tanggal Habis Berlaku" v-else>
        <Calendar />
      </InputGroup>
      <InputGroup
        label="Negara Yang Mengeluarkan"
        v-if="passenger.idType !== 'NIK'"
      >
        <Dropdown
          :options="JSON.stringify(countries)"
          v-model="passenger.title"
          label="CountryName"
          value="CountryCode"
          style="min-width: unset !important"
        />
      </InputGroup>
      <span class="passport-warning" v-if="passenger.idType !== 'NIK'"
        >Perhatian: paspor berlaku minimal 6 bulan dari tanggal kedatangan di
        destinasi tujuan.</span
      >
    </div>
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
}

const { i, type, t } = defineProps<Props>();

const heading = computed(
  () =>
    ({
      adult: 'Dewasa',
      child: 'Anak',
      infant: 'Bayi',
    }[type])
);

const passenger = reactive({
  title: '',
  firstName: '',
  middleName: '',
  lastName: '',
  nationality: '',
  dob: '',
  idType: 'NIK',
  idNo: '',
  idExpiry: '',
  idOrigin: '',
});

const rules = computed(() => ({
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
  idNo: {
    required: helpers.withMessage(t('VALIDATION.REQUIRED'), required),
  },
}));

const v = useVuelidate(rules, passenger);
</script>

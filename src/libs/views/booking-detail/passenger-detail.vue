<template>
  <div class="booking__main booking__passenger">
    <h3 class="booking__passenger-header">{{ i }}. Penumpang {{ heading }}</h3>
    <div class="booking__main-column-4">
      <InputGroup :label="t('FORM.TITLE')">
        <Dropdown
          :options="
            JSON.stringify([
              { code: 'Tuan', label: 'Tuan' },
              { code: 'Nyonya', label: 'Nyonya' },
              { code: 'Nona', label: 'Nona' },
            ])
          "
          code="code"
          label="label"
        />
      </InputGroup>
      <InputGroup :label="t('FORM.FIRST')">
        <Input
          type="text"
          class="hello-there hello-all"
          name="first-name"
        ></Input>
      </InputGroup>
      <InputGroup :label="t('FORM.MIDDLE')">
        <Input
          type="text"
          class="hello-there hello-all"
          name="first-name"
        ></Input>
      </InputGroup>
      <InputGroup :label="t('FORM.LAST')">
        <Input
          type="text"
          class="hello-there hello-all"
          name="first-name"
        ></Input>
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
          :options="
            JSON.stringify([
              { code: 'Tuan', label: 'Tuan' },
              { code: 'Nyonya', label: 'Nyonya' },
              { code: 'Nona', label: 'Nona' },
            ])
          "
          code="code"
          label="label"
        />
      </InputGroup>
      <InputGroup label="Tanggal Lahir">
        <!-- <Dropdown
          :options="
            JSON.stringify([
              { code: 'Tuan', label: 'Tuan' },
              { code: 'Nyonya', label: 'Nyonya' },
              { code: 'Nona', label: 'Nona' },
            ])
          "
          code="code"
          label="label"
        /> -->

        <Calendar />
      </InputGroup>
    </div>
    <div class="booking__main-column-2">
      <InputGroup label="Tipe Identitas">
        <Dropdown
          :options="
            JSON.stringify([
              { code: 'Tuan', label: 'Tuan' },
              { code: 'Nyonya', label: 'Nyonya' },
              { code: 'Nona', label: 'Nona' },
            ])
          "
          code="code"
          label="label"
        />
      </InputGroup>
      <InputGroup label="Nomor NIK">
        <Input
          type="text"
          class="hello-there hello-all"
          name="first-name"
          placeholder="Nomor NIK minimal 16 karakter"
        ></Input>
      </InputGroup>
    </div>
  </div>
</template>

<script setup lang="ts">
import Input from '../../atoms/inputs/input.vue';
import Dropdown from '../../atoms/inputs/dropdown.vue';
import InputGroup from '../../atoms/inputs/input-group.vue';
import Calendar from '../../atoms/inputs/calendar.vue';

import { computed, reactive, ref } from 'vue';

interface Props {
  i: number;
  type: 'adult' | 'child' | 'infant';
  t: any;
}

const { i, type } = defineProps<Props>();

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
  idType: '',
  idNo: '',
});
</script>

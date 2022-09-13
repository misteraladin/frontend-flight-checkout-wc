<template>
  <div class="booking">
    <h1 class="booking__title">{{ t('BOOKING_DETAIL_HEADING') }}</h1>
    <div class="booking__main">
      <h3 class="booking__subtitle">{{ t('CONTACT_DETAILS') }}</h3>
      <LoginBanner login-url="https://misteraladin.com"></LoginBanner>
      <Card>
        <template v-slot:header>
          <span>{{ t('CONTACT_DETAILS') }}</span>
        </template>
        <div class="booking__main">
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
                v-model="bookPerson.firstName"
              ></Input>
            </InputGroup>
            <InputGroup :label="t('FORM.MIDDLE')">
              <Input
                type="text"
                class="hello-there hello-all"
                name="first-name"
                v-model="bookPerson.midddleName"
              ></Input>
            </InputGroup>
            <InputGroup :label="t('FORM.LAST')">
              <Input
                type="text"
                class="hello-there hello-all"
                name="first-name"
                v-model="bookPerson.lastName"
              ></Input>
            </InputGroup>
          </div>

          <ul class="booking__information" v-html="t('FORM.INFORMATION')"></ul>

          <InputGroup :label="t('FORM.TELP')">
            <Input
              type="text"
              class="hello-there hello-all"
              name="first-name"
              placeholder="81234567890"
            ></Input>
            <template v-slot:prepend>
              <!-- <Dropdown
                :options="JSON.stringify(data.country.Data)"
                code="CodeTelp"
                label="CodeTelp"
                as-icon="Image"
              /> -->
            </template>
          </InputGroup>

          <InputGroup :label="t('FORM.EMAIL')">
            <Input
              type="text"
              class="hello-there hello-all"
              name="first-name"
              placeholder="email@domain.com"
            ></Input>
          </InputGroup>
        </div>
      </Card>

      <Card>
        <template v-slot:header>
          <span>{{ t('PASSENGER_DETAILS') }}</span>
          <div>
            <Switcher>{{ t('SAME_AS_CONTACT') }}</Switcher>
          </div>
        </template>

        <!-- adult mapping -->
        <PassengerDetail
          v-for="(_, i) in +parsedData.adult"
          :key="i"
          :i="i + 1"
          type="adult"
          :t="t"
        />

        <!-- children mapping -->

        <PassengerDetail
          v-for="(_, i) in +parsedData.child"
          :key="i"
          :i="i + +parsedData.adult + 1"
          type="child"
          :t="t"
        />

        <!-- infant mapping -->

        <PassengerDetail
          v-for="(_, i) in +parsedData.infant"
          :key="i"
          :i="i + +parsedData.adult + +parsedData.child + 1"
          type="infant"
          :t="t"
        />
      </Card>
      <div class="booking__main-column-2-left">
        <p style="color: #dd2c00; font-size: 16px; font-weight: 500">
          Perhatian: nama penumpang harus sama dengan paspor (penerbangan
          internasional), atau KTP/SIM (penerbangan domestik). Data penumpang
          tidak dapat diubah setelah halaman ini.
        </p>
        <Button variant="warning" @click="onConfirmBooking">
          Konfirmasi
        </Button>
      </div>
    </div>
    <div class="booking__sidebar">
      <h3 class="booking__subtitle">{{ t('BOOKING_DETAILS') }}</h3>
      <Card alternate class="booking__timeline">
        <FlightCard
          :segment="departureFLights.Segments"
          :header="'Keberangkatan'"
        />
        <FlightCard
          :segment="returnFlights.Segments"
          :header="'Kepulangan'"
          v-if="returnFlights"
        />
        <PriceCard
          :heading="'Harga Keberangkatan'"
          :fare="departureFLights.FareDetail"
        />
        <PriceCard
          :heading="'Harga Kepulangan'"
          :fare="returnFlights.FareDetail"
          v-if="returnFlights"
        />
        <div class="booking__total">
          <span>Total</span>
          <span>{{ toIDR(total) }}</span>
        </div>
      </Card>
    </div>
  </div>
</template>

<script setup lang="ts">
import Button from '../../atoms/button/button.vue';
import LoginBanner from '../../components/login-banner/login-banner.vue';

import Input from '../../atoms/inputs/input.vue';
import Dropdown from '../../atoms/inputs/dropdown.vue';
import InputGroup from '../../atoms/inputs/input-group.vue';
import Switcher from '../../atoms/inputs/switcher.vue';

import FlightCard from '../../atoms/cards/flight-card.vue';
import PriceCard from '../../atoms/cards/price-card.vue';
import Card from '../../atoms/cards/card.vue';

import PassengerDetail from './passenger-detail.vue';

import { computed, HTMLAttributes, reactive } from 'vue';
import { toIDR } from '../../../utils';

import useVuelidate from '@vuelidate/core';
import { required } from '@vuelidate/validators';

import { useI18n } from 'vue-i18n';
import messages from './lang';

interface Props extends HTMLAttributes {
  data: string;
  languange?: 'en' | 'id';
}

const props = defineProps<Props>();

const { t } = useI18n({
  messages: messages,
});

const parsedData = reactive(props.data ? JSON.parse(props.data) : null);

const departureFLights = reactive(JSON.parse(parsedData.segment1));

const returnFlights = reactive(JSON.parse(parsedData.segment2));

const total = computed(() => {
  if (!returnFlights) return departureFLights.FareDetail.Total;
  return departureFLights.FareDetail.Total + returnFlights.FareDetail.Total;
});

// console.log('departure', departureFLights);
// console.log('return', returnFlights);
console.log('data', departureFLights);
// console.log(props.languange);

const bookPerson = reactive({
  firstName: '',
  midddleName: '',
  lastName: '',
});

const rules = computed(() => ({
  firstName: {
    required,
  },
}));

const v = useVuelidate(rules, bookPerson);

const onConfirmBooking = async () => {
  console.log(bookPerson);
  console.log(await v.value.$validate());
  console.log(v);
};
</script>

<style lang="scss">
@use '@/styles/booking-detail';
</style>

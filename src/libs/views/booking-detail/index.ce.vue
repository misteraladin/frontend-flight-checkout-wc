<template>
  <div class="booking">
    <h1 class="booking__title">{{ t('BOOKING_DETAIL_HEADING') }}</h1>

    <div class="booking__main">
      <h3 class="booking__subtitle">{{ t('CONTACT_DETAILS') }}</h3>
      <LoginBanner
        login-url="https://misteraladin.com"
        v-if="!user?.IsLogin"
      ></LoginBanner>
      <ElForm
        ref="formRef"
        label-position="top"
        class="booking__main"
        :hide-required-asterisk="true"
      >
        <ContactDetail
          :t="t"
          :countries="parsedCountries"
          :model="bookingDetail.contact"
          :user="user"
        />

        <Card>
          <template v-slot:header>
            <span>{{ t('PASSENGER_DETAILS') }}</span>
            <div>
              <Switcher @on-switch="onClickDuplicateContact">{{
                t('SAME_AS_CONTACT')
              }}</Switcher>
            </div>
          </template>

          <!-- adult mapping -->
          <template v-if="bookingDetail.passengers.adult.length">
            <PassengerDetail
              v-for="(_, i) in +parsedData.adult"
              :key="i"
              :i="i + 1"
              type="adult"
              :t="t"
              :countries="parsedCountries"
              :model="bookingDetail.passengers.adult[i]"
            />
          </template>

          <!-- children mapping -->

          <PassengerDetail
            v-for="(_, i) in +parsedData.child"
            :key="i"
            :i="i + +parsedData.adult + 1"
            type="child"
            :t="t"
            :countries="parsedCountries"
            :model="bookingDetail.passengers.child[i]"
          />

          <!-- infant mapping -->

          <PassengerDetail
            v-for="(_, i) in +parsedData.infant"
            :key="i"
            :i="i + +parsedData.adult + +parsedData.child + 1"
            type="infant"
            :t="t"
            :countries="parsedCountries"
            :model="bookingDetail.passengers.infant[i]"
          />
        </Card>
      </ElForm>
      <div class="booking__main-column-2-left">
        <p style="color: #dd2c00; font-size: 16px; font-weight: 500">
          {{ t('ATTENTION') }}
        </p>
        <Button variant="warning" @click="onConfirmBooking">
          {{ t('CONFIRM.BUTTON') }}
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
    <ElDialog
      v-model="isLoading"
      :show-close="false"
      width="40%"
      :close-on-click-modal="false"
      :close-on-press-escape="false"
    >
      <div
        style="
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 24px;
        "
      >
        <img src="https://i.misteraladin.com/loader-mnc.gif" width="124" />
        <p style="size: 20px; font-weight: 600">Eits, jangan kemana-mana!</p>
        <p style="text-align: center">
          Pemesanan kamu sedang diproses. Janji, deh, gak akan lama. Cuma
          beberapa menit aja, kok.
        </p>
      </div>
    </ElDialog>
  </div>
</template>

<script setup lang="ts">
import Button from '../../atoms/button/button.vue';
import LoginBanner from '../../components/login-banner/login-banner.vue';

import { Action, ElForm, ElMessageBox, ElDialog } from 'element-plus';
import type { FormInstance } from 'element-plus';

import Switcher from '../../atoms/inputs/switcher.vue';

import FlightCard from '../../atoms/cards/flight-card.vue';
import PriceCard from '../../atoms/cards/price-card.vue';
import Card from '../../atoms/cards/card.vue';

import PassengerDetail from './passenger-detail.vue';
import ContactDetail from './contact-detail.vue';

import { computed, HTMLAttributes, reactive, ref } from 'vue';
import { toIDR } from '../../../utils';

import useVuelidate from '@vuelidate/core';

import { useI18n } from 'vue-i18n';
import messages from './lang';

import axios from 'axios';

interface Props extends HTMLAttributes {
  data: string;
  languange?: 'en' | 'id';
  countries: string;
  keyid: string;
  token: string;
  isloggedin: any;
  segment1: string;
  segment2?: string;
  confirmAsset: string;
  numpass: string;
  baseurl: string;
}

const props = defineProps<Props>();

console.log(props);

const { t } = useI18n({
  messages: messages,
});

const parsedData = reactive(props.data ? JSON.parse(props.data) : null);

const departureFLights = reactive(JSON.parse(parsedData.segment1));

const returnFlights = reactive(JSON.parse(parsedData.segment2));

const parsedCountries = reactive(JSON.parse(props.countries));

const user = reactive(JSON.parse(props.isloggedin));

const total = computed(() => {
  if (!returnFlights) return departureFLights.FareDetail.Total;
  return departureFLights.FareDetail.Total + returnFlights.FareDetail.Total;
});

//form Object
const formRef = ref<FormInstance>();
// const showValidation = ref(false);
const bookingDetail = reactive<any>({
  contact: {
    title: 'Mr',
    firstName: '',
    middleName: '',
    lastName: '',
    phoneCode: '62',
    phoneNumber: '',
    email: '',
  },
  passengers: {
    adult: [],
    child: [],
    infant: [],
  },
});

if (user?.IsLogin) {
  const loggedInName = user.FullName.split(' ');
  bookingDetail.contact.firstName = loggedInName[0];
  if (loggedInName.length > 1) {
    bookingDetail.contact.lastName = loggedInName[loggedInName.length - 1];
  }
  if (loggedInName.length > 2) {
    const [_, ...restOftheName] = loggedInName;
    const [__, ...mName] = restOftheName.reverse();
    bookingDetail.contact.middleName = mName.reverse().join(' ');
  }
  bookingDetail.contact.phoneCode = user.PhoneCountry;
  bookingDetail.contact.phoneNumber = user.PhoneOriginal;
  bookingDetail.contact.email = user.Email;
}

// onMounted(() => {
for (let i = 0; i < +parsedData.adult; i++) {
  bookingDetail.passengers.adult.push({
    title: 'Mr',
    firstName: '',
    middleName: '',
    lastName: '',
    nationality: 'ID',
    dob: '',
    idType: 'NIK',
    idNo: '',
    idExpiry: '',
    idOrigin: 'ID',
  });
}
for (let i = 0; i < +parsedData.child; i++) {
  bookingDetail.passengers.child.push({
    title: 'Mr',
    firstName: '',
    middleName: '',
    lastName: '',
    nationality: 'ID',
    dob: '',
    idType: 'NIK',
    idNo: '',
    idExpiry: '',
    idOrigin: 'ID',
  });
}
for (let i = 0; i < +parsedData.infant; i++) {
  bookingDetail.passengers.infant.push({
    title: 'Mr',
    firstName: '',
    middleName: '',
    lastName: '',
    nationality: 'ID',
    dob: '',
    idType: 'NIK',
    idNo: '',
    idExpiry: '',
    idOrigin: 'ID',
  });
}
// });

// console.log('bookingDetail', bookingDetail);

const onClickDuplicateContact = (val: boolean) => {
  if (val) {
    if (bookingDetail.contact.firstName && bookingDetail.contact.lastName) {
      bookingDetail.passengers.adult[0].title = bookingDetail.contact.title;
      bookingDetail.passengers.adult[0].firstName =
        bookingDetail.contact.firstName;
      bookingDetail.passengers.adult[0].middleName =
        bookingDetail.contact.middleName;
      bookingDetail.passengers.adult[0].lastName =
        bookingDetail.contact.lastName;
    } else {
      ElMessageBox.alert(t('ERROR.MATCH_NAME'), {
        confirmButtonText: 'OK',
        customStyle: {
          '--el-color-primary': '#323c9f',
        },
        confirmButtonClass: 'ma-confirm',
        center: true,
        showClose: false,
        callback: (action: Action) => {},
      });
    }
  } else {
    bookingDetail.passengers.adult[0].title = 'Mr';
    bookingDetail.passengers.adult[0].firstName = '';
    bookingDetail.passengers.adult[0].middleName = '';
    bookingDetail.passengers.adult[0].lastName = '';
  }
};

const v = useVuelidate();
const isLoading = ref(false);

const onConfirmBooking = async () => {
  const isValid = await v.value.$validate();
  if (!isValid) return;
  ElMessageBox.alert(
    `
  <div style="display: flex; flex-direction: column; gap: 24px; align-items: center;">
    <img src="${props.confirmAsset}" width="124"/>
    <p style="size: 20px; font-weight: 600;">Pastikan data kamu sudah benar sebelum melanjutkan</p>
  </div>`,
    {
      dangerouslyUseHTMLString: true,
      confirmButtonText: 'Lanjut',
      cancelButtonText: 'Cek Lagi',
      showCancelButton: true,
      customStyle: {
        '--el-color-primary': '#323c9f',
      },
      confirmButtonClass: 'ma-confirm',
      cancelButtonClass: 'ma-cancel',
      showClose: false,
      callback: async (action: Action) => {
        console.log(action);
        if (action === 'confirm') {
          isLoading.value = true;
          const data: any = {
            numPassengers: +JSON.parse(props.numpass),
            FlightTypeDepart: departureFLights.FlightType,
            FlightTypeReturn: returnFlights?.FlightType,
            keyID: props.keyid,
            Segment1: await JSON.parse(props.segment1),
            Segment2: props.segment2 ? await JSON.parse(props.segment2) : null,

            ContactTitle: bookingDetail.contact.title,
            contactFirstname: bookingDetail.contact.firstName,
            contactMiddlename: bookingDetail.contact.middleName,
            contactLastname: bookingDetail.contact.lastName,
            phoneCode: bookingDetail.contact.phoneCode,
            PhoneNumber: bookingDetail.contact.phoneNumber,
            ContactEmail: bookingDetail.contact.email,
          };

          for (let i = 1; i <= bookingDetail.passengers.adult.length; i++) {
            data['Type' + i] = '1';
            // data['Title' + i] = 'Mr';
            data['Title' + i] = bookingDetail.passengers.adult[i - 1].title;
            data['Firstname' + i] =
              bookingDetail.passengers.adult[i - 1].firstName;
            data['Middlename' + i] =
              bookingDetail.passengers.adult[i - 1].middleName;
            data['Lastname' + i] =
              bookingDetail.passengers.adult[i - 1].lastName;
            data['Nat' + i] = bookingDetail.passengers.adult[i - 1].idOrigin;
            data['Day' + i] = new Date(
              bookingDetail.passengers.adult[i - 1].dob
            ).toLocaleDateString('id-ID', { day: '2-digit' });
            data['Month' + i] = new Date(
              bookingDetail.passengers.adult[i - 1].dob
            ).toLocaleDateString('id-ID', { month: '2-digit' });
            data['Years' + i] = new Date(
              bookingDetail.passengers.adult[i - 1].dob
            ).getFullYear();
            data['IdentityType' + i] =
              bookingDetail.passengers.adult[i - 1].idType;
            data['IdentityNumber' + i] =
              bookingDetail.passengers.adult[i - 1].idNo;

            if (bookingDetail.passengers.adult[i - 1].idType !== 'NIK') {
              data['PPDay' + i] = new Date(
                bookingDetail.passengers.adult[i - 1].idExpiry
              ).toLocaleDateString('id-ID', { day: '2-digit' });
              data['PPMonth' + i] = new Date(
                bookingDetail.passengers.adult[i - 1].idExpiry
              ).toLocaleDateString('id-ID', { month: '2-digit' });
              data['PPYear' + i] = new Date(
                bookingDetail.passengers.adult[i - 1].idExpiry
              ).getFullYear();
              data['PPCOI' + i] =
                bookingDetail.passengers.adult[i - 1].idOrigin;
            }
          }

          for (let i = 1; i <= bookingDetail.passengers.child.length; i++) {
            data['Type' + (i + +bookingDetail.passengers.adult.length)] = '2';
            data['Title' + (i + +bookingDetail.passengers.adult.length)] =
              bookingDetail.passengers.child[i - 1].title;
            data['Firstname' + (i + +bookingDetail.passengers.adult.length)] =
              bookingDetail.passengers.child[i - 1].firstName;
            data['Middlename' + (i + +bookingDetail.passengers.adult.length)] =
              bookingDetail.passengers.child[i - 1].middleName;
            data['Lastname' + (i + +bookingDetail.passengers.adult.length)] =
              bookingDetail.passengers.child[i - 1].lastName;
            data['Nat' + (i + +bookingDetail.passengers.adult.length)] =
              bookingDetail.passengers.child[i - 1].idOrigin;
            data['Day' + (i + +bookingDetail.passengers.adult.length)] =
              new Date(
                bookingDetail.passengers.child[i - 1].dob
              ).toLocaleDateString('id-ID', { day: '2-digit' });
            data['Month' + (i + +bookingDetail.passengers.adult.length)] =
              new Date(
                bookingDetail.passengers.child[i - 1].dob
              ).toLocaleDateString('id-ID', { month: '2-digit' });
            data['Years' + (i + +bookingDetail.passengers.adult.length)] =
              new Date(bookingDetail.passengers.child[i - 1].dob).getFullYear();
            data[
              'IdentityType' + (i + +bookingDetail.passengers.adult.length)
            ] = bookingDetail.passengers.child[i - 1].idType;
            data[
              'IdentityNumber' + (i + +bookingDetail.passengers.adult.length)
            ] = bookingDetail.passengers.child[i - 1].idNo;

            if (bookingDetail.passengers.child[i - 1].idType !== 'NIK') {
              data['PPDay' + (i + +bookingDetail.passengers.adult.length)] =
                new Date(
                  bookingDetail.passengers.child[i - 1].idExpiry
                ).toLocaleDateString('id-ID', { day: '2-digit' });
              data['PPMonth' + (i + +bookingDetail.passengers.adult.length)] =
                new Date(
                  bookingDetail.passengers.child[i - 1].idExpiry
                ).toLocaleDateString('id-ID', { month: '2-digit' });
              data['PPYear' + (i + +bookingDetail.passengers.adult.length)] =
                new Date(
                  bookingDetail.passengers.child[i - 1].idExpiry
                ).getFullYear();
              data['PPCOI' + (i + +bookingDetail.passengers.adult.length)] =
                bookingDetail.passengers.child[i - 1].idOrigin;
            }
          }

          for (let i = 1; i <= bookingDetail.passengers.infant.length; i++) {
            data[
              'Type' +
                (i +
                  +bookingDetail.passengers.adult.length +
                  +bookingDetail.passengers.child.length)
            ] = '3';
            data[
              'Title' +
                (i +
                  +bookingDetail.passengers.adult.length +
                  +bookingDetail.passengers.child.length)
            ] = bookingDetail.passengers.adult[i - 1].title;
            data[
              'Firstname' +
                (i +
                  +bookingDetail.passengers.adult.length +
                  +bookingDetail.passengers.child.length)
            ] = bookingDetail.passengers.adult[i - 1].firstName;
            data[
              'Middlename' +
                (i +
                  +bookingDetail.passengers.adult.length +
                  +bookingDetail.passengers.child.length)
            ] = bookingDetail.passengers.adult[i - 1].middleName;
            data[
              'Lastname' +
                (i +
                  +bookingDetail.passengers.adult.length +
                  +bookingDetail.passengers.child.length)
            ] = bookingDetail.passengers.adult[i - 1].lastName;
            data[
              'Nat' +
                (i +
                  +bookingDetail.passengers.adult.length +
                  +bookingDetail.passengers.child.length)
            ] = bookingDetail.passengers.adult[i - 1].idOrigin;
            data[
              'Day' +
                (i +
                  +bookingDetail.passengers.adult.length +
                  +bookingDetail.passengers.child.length)
            ] = new Date(
              bookingDetail.passengers.adult[i - 1].dob
            ).toLocaleDateString('id-ID', { day: '2-digit' });
            data[
              'Month' +
                (i +
                  +bookingDetail.passengers.adult.length +
                  +bookingDetail.passengers.child.length)
            ] = new Date(
              bookingDetail.passengers.adult[i - 1].dob
            ).toLocaleDateString('id-ID', { month: '2-digit' });
            data[
              'Years' +
                (i +
                  +bookingDetail.passengers.adult.length +
                  +bookingDetail.passengers.child.length)
            ] = new Date(
              bookingDetail.passengers.adult[i - 1].dob
            ).getFullYear();
            data[
              'IdentityType' +
                (i +
                  +bookingDetail.passengers.adult.length +
                  +bookingDetail.passengers.child.length)
            ] = bookingDetail.passengers.adult[i - 1].idType;
            data[
              'IdentityNumber' +
                (i +
                  +bookingDetail.passengers.adult.length +
                  +bookingDetail.passengers.child.length)
            ] = bookingDetail.passengers.adult[i - 1].idNo;

            if (bookingDetail.passengers.infant[i - 1].idType !== 'NIK') {
              data[
                'PPDay' +
                  (i +
                    +bookingDetail.passengers.adult.length +
                    +bookingDetail.passengers.child.length)
              ] = new Date(
                bookingDetail.passengers.infant[i - 1].idExpiry
              ).toLocaleDateString('id-ID', { day: '2-digit' });
              data[
                'PPMonth' +
                  (i +
                    +bookingDetail.passengers.adult.length +
                    +bookingDetail.passengers.child.length)
              ] = new Date(
                bookingDetail.passengers.infant[i - 1].idExpiry
              ).toLocaleDateString('id-ID', { month: '2-digit' });
              data[
                'PPYear' +
                  (i +
                    +bookingDetail.passengers.adult.length +
                    +bookingDetail.passengers.child.length)
              ] = new Date(
                bookingDetail.passengers.infant[i - 1].idExpiry
              ).getFullYear();
              data[
                'PPCOI' +
                  (i +
                    +bookingDetail.passengers.adult.length +
                    +bookingDetail.passengers.child.length)
              ] = bookingDetail.passengers.infant[i - 1].idOrigin;
            }
          }

          const response = await axios.post(
            props.baseurl + '/passengerDetails',
            {
              ...data,
            },
            {
              headers: {
                'X-CSRF-TOKEN': props.token,
              },
            }
          );
          console.log(response);
          isLoading.value = false;
          if (response.data.data.Message === 'OK') {
            window.location.href =
              'review_booking?ReservationCode=' + response.data.code;
          }
        }
      },
      center: true,
    }
  );
  return;
};
</script>

<style lang="scss">
@use '@/styles/booking-detail';
</style>

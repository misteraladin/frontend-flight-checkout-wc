<template>
  <div class="booking" v-if="windowSize.width >= 768">
    <h1 class="booking__title">{{ t('BOOKING_DETAIL_HEADING') }}</h1>

    <div class="booking__main">
      <h3 class="booking__subtitle">{{ t('CONTACT_DETAILS') }}</h3>
      <LoginBanner
        login-url="https://misteraladin.com"
        :t="t"
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
          :header="t('departure')"
          :locale="locale"
          :t="t"
        />
        <FlightCard
          :segment="returnFlights.Segments"
          :header="t('return')"
          :locale="locale"
          :t="t"
          v-if="returnFlights"
        />
        <PriceCard
          :heading="t('departure_price')"
          :fare="departureFLights.FareDetail"
        />
        <PriceCard
          :heading="t('return_price')"
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
  <div id="booking-detail-mobile" v-if="windowSize.width < 768">
    <Header>
      {{ t('CONTACT_DETAILS') }}
    </Header>

    <FlightItem
      :title="t('departure')"
      :segment="departureFLights"
      :t="t"
      :has-detail-button="true"
      @showDetail="showModalDetail = true"
    />

    <FlightItem
      class="pt-0"
      :title="t('return')"
      :segment="returnFlights"
      :t="t"
      :has-detail-button="false"
      v-if="returnFlights"
    />

    <BannerLogin :t="t" />

    <section class="booking-detail__contact">
      <h2>{{ t('BOOKING_DETAILS') }}</h2>
      <ContactDetailMobile
        type="contact"
        :passenger="bookingDetail.contact"
        :placeholder="t('enter_details')"
        :t="t"
      />
      <!-- <Passenger
        type="contact"
        :passenger="bookingDetail.contact"
        :placeholder="t('enter_details')"
        :t="t"
      /> -->
    </section>

    <section class="booking-detail__traveler pt-0">
      <h2>{{ t('traveler_details') }}</h2>
      <div class="same-as-contact">
        <span>{{ t('SAME_AS_CONTACT') }}</span>
        <Switch
          :model-value="isDuplicateContact"
          @update:model-value="onUpdateIsDuplicateContact"
        />
      </div>
      <div
        v-for="(
          passengerTypes, keyTypes, indexTypes
        ) in bookingDetail.passengers"
        :key="indexTypes"
      >
        <Passenger
          v-for="(passenger, index) in passengerTypes"
          :key="index"
          :type="(keyTypes as any as string)"
          :passenger="passenger"
          :placeholder="`${indexTypes! + 1}. ` +   t(`passenger_${keyTypes}`)"
          :t="t"
          :height="windowSize.height"
        />
      </div>
    </section>

    <section class="booking-detail__info">
      <p>{{ t('ATTENTION') }}</p>
    </section>

    <Footer @next="onConfirmBooking">
      {{ t('next') }}
    </Footer>

    <ModalWindow
      v-model:show="showModalDetail"
      @close="showModalDetail = false"
      :title="t('booking_details')"
    >
      <template v-slot:header>
        {{ t('booking_details') }}
      </template>
      <div class="booking-detail__modal-flight">
        <FlightCard
          :segment="departureFLights.Segments"
          :header="t('departure')"
          :locale="locale"
          :t="t"
        />
        <FlightCard
          :segment="returnFlights.Segments"
          :header="t('return')"
          :locale="locale"
          :t="t"
          v-if="returnFlights"
        />
        <PriceCard
          :heading="t('departure_price')"
          :fare="departureFLights.FareDetail"
        />
        <PriceCard
          :heading="t('return_price')"
          :fare="returnFlights.FareDetail"
          v-if="returnFlights"
        />
        <div class="booking__total">
          <span>Total</span>
          <span>{{ toIDR(total) }}</span>
        </div>
      </div>
      <template v-slot:footer>
        {{ t('close') }}
      </template>
    </ModalWindow>
  </div>
  <Popup
    v-model:show="isLoading"
    :close-on-click-overlay="false"
    round
    :style="{
      borderRadius: '8px',
      width: 'calc(100vw - 16px * 2)',
      maxWidth: '475px',
    }"
  >
    <div
      :style="{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '24px',
        padding: '16px',
      }"
    >
      <img src="https://i.misteraladin.com/loader-mnc.gif" width="124" />
      <p style="size: 20px; font-weight: 600">
        {{ t('BOOKING_LOADING_TITLE') }}
      </p>
      <p style="text-align: center">
        {{ t('BOOKING_LODING_TEXT') }}
      </p>
    </div>
  </Popup>
</template>

<script setup lang="ts">
import Button from '../../atoms/button/button.vue';
import LoginBanner from '../../components/login-banner/login-banner.vue';

import { Action, ElForm, ElMessageBox } from 'element-plus';
import type { FormInstance } from 'element-plus';

import Switcher from '../../atoms/inputs/switcher.vue';

import FlightCard from '../../atoms/cards/flight-card.vue';
import PriceCard from '../../atoms/cards/price-card.vue';
import Card from '../../atoms/cards/card.vue';

import PassengerDetail from './passenger-detail.vue';
import ContactDetail from './contact-detail.vue';
import ContactDetailMobile from './contact-detail-mobile.vue';

import {
  computed,
  HTMLAttributes,
  onMounted,
  onUnmounted,
  reactive,
  ref,
} from 'vue';

import Header from '../common-mobile/mobile-header.vue';
import BannerLogin from '../common-mobile/mobile-banner-login.vue';
import FlightItem from './booking-detail-flight-item-mobile.vue';
import Footer from '../common-mobile/mobile-footer.vue';
import Passenger from './booking-detail-passenger-mobile.vue';
import ModalWindow from '../common-mobile/ModalWindow.vue';
import BookingDetailFlightDetailMobile from './booking-detail-flight-detail-mobile.vue';

import { Switch, showDialog, Popup } from 'vant';

import { toIDR } from '../../../utils';

import useVuelidate from '@vuelidate/core';

import { useI18n } from 'vue-i18n';
import messages from './lang';

import axios from 'axios';

import {
  RootObject as IRootObject,
  Segment as ISegment,
  Form as IForm,
} from './types';

interface Props extends HTMLAttributes {
  data: string;
  language?: 'en' | 'id';
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

const { t } = useI18n({
  messages: messages,
});

const parsedData = reactive(props.data ? JSON.parse(props.data) : null);

const departureFLights = reactive(JSON.parse(parsedData.segment1));

const returnFlights = reactive(
  parsedData.segment2 ? JSON.parse(parsedData.segment2) : null
);

const parsedCountries = reactive(JSON.parse(props.countries));

const user = reactive(JSON.parse(props.isloggedin));

const locale = computed(() => (props.language === 'en' ? 'en-GB' : 'id-ID'));

const total = computed(() => {
  if (!returnFlights) return departureFLights.FareDetail.Total;
  return departureFLights.FareDetail.Total + returnFlights.FareDetail.Total;
});

const windowSize = reactive({
  width: 0,
  height: 0,
});

const onResize = () => {
  windowSize.width = window.innerWidth;
  windowSize.height = window.innerHeight;
};

onMounted(() => {
  window.addEventListener('resize', onResize);
  windowSize.width = window.innerWidth;
  windowSize.height = window.innerHeight;
});

onUnmounted(() => {
  window.removeEventListener('resize', onResize);
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

const isDuplicateContact = ref(false);

const onUpdateIsDuplicateContact = (newValue: boolean) => {
  if (newValue) {
    if (bookingDetail.contact.firstName && bookingDetail.contact.lastName) {
      bookingDetail.passengers.adult[0].title = bookingDetail.contact.title;
      bookingDetail.passengers.adult[0].firstName =
        bookingDetail.contact.firstName;
      bookingDetail.passengers.adult[0].middleName =
        bookingDetail.contact.middleName;
      bookingDetail.passengers.adult[0].lastName =
        bookingDetail.contact.lastName;
      isDuplicateContact.value = newValue;
    } else {
      // ElMessageBox.alert(t('ERROR.MATCH_NAME'), {
      //   confirmButtonText: 'OK',
      //   customStyle: {
      //     '--el-color-primary': '#323c9f',
      //   },
      //   confirmButtonClass: 'ma-confirm',
      //   center: true,
      //   showClose: false,
      //   callback: (action: Action) => {},
      // });
      showDialog({
        message: t('ERROR.MATCH_NAME'),
        confirmButtonText: 'OK',
        theme: 'round-button',
        className: 'ma-confirm-duplicate',
      });
    }
  } else {
    bookingDetail.passengers.adult[0].title = 'Mr';
    bookingDetail.passengers.adult[0].firstName = '';
    bookingDetail.passengers.adult[0].middleName = '';
    bookingDetail.passengers.adult[0].lastName = '';

    isDuplicateContact.value = newValue;
  }
};

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
      // ElMessageBox.alert(t('ERROR.MATCH_NAME'), {
      //   confirmButtonText: 'OK',
      //   customStyle: {
      //     '--el-color-primary': '#323c9f',
      //   },
      //   confirmButtonClass: 'ma-confirm',
      //   center: true,
      //   showClose: false,
      //   callback: (action: Action) => {},
      // });
      showDialog({
        message: t('ERROR.MATCH_NAME'),
        confirmButtonText: 'OK',
        theme: 'round-button',
        className: 'ma-confirm-duplicate',
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
  // console.log(bookingDetail);

  const isValid = await v.value.$validate();
  console.log(bookingDetail, v.value);
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
      customClass: 'ma-confirm-booking',
      showClose: false,
      callback: async (action: Action) => {
        if (action === 'confirm') {
          isLoading.value = true;
          const data: any = {
            numPassengers: +JSON.parse(props.numpass),
            FlightTypeDepart: departureFLights.FlightType,
            FlightTypeReturn: returnFlights?.FlightType || '',
            keyID: props.keyid,
            Segment1: await JSON.parse(props.segment1),
            Segment2:
              props.segment2 && props.segment2 !== 'null'
                ? await JSON.parse(props.segment2)
                : '',

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

            data['FFDepartName' + i] = '';
            data['FFDepartNumber' + i] = '';
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

            data['FFDepartName' + i] = '';
            data['FFDepartNumber' + i] = '';
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
            ] = bookingDetail.passengers.infant[i - 1].title;
            data[
              'Firstname' +
                (i +
                  +bookingDetail.passengers.adult.length +
                  +bookingDetail.passengers.child.length)
            ] = bookingDetail.passengers.infant[i - 1].firstName;
            data[
              'Middlename' +
                (i +
                  +bookingDetail.passengers.adult.length +
                  +bookingDetail.passengers.child.length)
            ] = bookingDetail.passengers.infant[i - 1].middleName;
            data[
              'Lastname' +
                (i +
                  +bookingDetail.passengers.adult.length +
                  +bookingDetail.passengers.child.length)
            ] = bookingDetail.passengers.infant[i - 1].lastName;
            data[
              'Nat' +
                (i +
                  +bookingDetail.passengers.adult.length +
                  +bookingDetail.passengers.child.length)
            ] = bookingDetail.passengers.infant[i - 1].idOrigin;
            data[
              'Day' +
                (i +
                  +bookingDetail.passengers.adult.length +
                  +bookingDetail.passengers.child.length)
            ] = new Date(
              bookingDetail.passengers.infant[i - 1].dob
            ).toLocaleDateString('id-ID', { day: '2-digit' });
            data[
              'Month' +
                (i +
                  +bookingDetail.passengers.adult.length +
                  +bookingDetail.passengers.child.length)
            ] = new Date(
              bookingDetail.passengers.infant[i - 1].dob
            ).toLocaleDateString('id-ID', { month: '2-digit' });
            data[
              'Years' +
                (i +
                  +bookingDetail.passengers.adult.length +
                  +bookingDetail.passengers.child.length)
            ] = new Date(
              bookingDetail.passengers.infant[i - 1].dob
            ).getFullYear();
            data[
              'IdentityType' +
                (i +
                  +bookingDetail.passengers.adult.length +
                  +bookingDetail.passengers.child.length)
            ] = bookingDetail.passengers.infant[i - 1].idType;
            data[
              'IdentityNumber' +
                (i +
                  +bookingDetail.passengers.adult.length +
                  +bookingDetail.passengers.child.length)
            ] = bookingDetail.passengers.infant[i - 1].idNo;

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

            data['FFDepartName' + i] = '';
            data['FFDepartNumber' + i] = '';
          }

          let formData = new FormData();
          for (let key in data) {
            formData.append(key, data[key]);
          }

          const response = await axios.post(
            props.baseurl + '/passengerDetails',
            formData,
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
          } else {
            const errorAssets = `<svg width="81" height="81" viewBox="0 0 81 81" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_4895_2304)">
                <path d="M57.7526 27.1747C58.5337 26.3937 58.5337 25.1273 57.7526 24.3463L56.821 23.4147C56.04 22.6337 54.7737 22.6337 53.9926 23.4147L40.5002 36.9072L27.0077 23.4147C26.2267 22.6337 24.9603 22.6337 24.1793 23.4147L23.2477 24.3463C22.4667 25.1273 22.4667 26.3937 23.2477 27.1747L36.7402 40.6672L23.2477 54.1596C22.4667 54.9407 22.4667 56.207 23.2477 56.988L24.1793 57.9196C24.9603 58.7007 26.2267 58.7007 27.0077 57.9196L40.5002 44.4272L53.9926 57.9196C54.7737 58.7007 56.04 58.7007 56.821 57.9196L57.7526 56.988C58.5337 56.207 58.5337 54.9407 57.7526 54.1596L44.2602 40.6672L57.7526 27.1747Z" fill="#C62828" />
              </g>
              <rect x="2.5" y="2.66699" width="76" height="76" rx="38" stroke="#C62828" stroke-width="4" />
              <defs>
                <clipPath id="clip0_4895_2304">
                  <rect x="8.5" y="8.66699" width="64" height="64" rx="32" fill="white" />
                </clipPath>
              </defs>
            </svg>`;

            showDialog({
              message: `<div style="display: flex; flex-direction: column; gap: 24px; align-items: center;">
               ${errorAssets}
               <p style="size: 20px; font-weight: 600;">${t(
                 'order_cant_processed'
               )}</p>
              </div>`,
              confirmButtonText: t('return_main_page'),
              theme: 'round-button',
              className: 'ma-confirm-duplicate',
              allowHtml: true,
              beforeClose: (action: Action) => {
                if (action === 'confirm') {
                  document.location.href = '/';
                }
              },
            });

            console.log(response.data.message);
          }
        }
      },
      center: true,
    }
  );
  return;
};

const showModalDetail = ref(false);
</script>

<style lang="scss">
@use '@/styles/booking-detail';
@use '@/styles/pages/booking-detail-mobile';
@import 'https://fastly.jsdelivr.net/npm/vant@4/lib/index.css';
</style>

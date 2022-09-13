<template>
  <div class="booking">
    <h1 class="booking__title">{{ t('BOOKING_DETAIL_HEADING') }}</h1>
    <div class="booking__main">
      <h3 class="booking__subtitle">{{ t('CHECK_DETAILS') }}</h3>
      <Card>
        <template v-slot:header>
          <span>{{ t('CONTACT_DETAILS') }}</span>
        </template>
        <div class="booking__main-column-2">
          <p class="span-2-column">
            1. {{ reservationDetail.ReservationVendor.Title }}
            {{ reservationDetail.ReservationVendor.FirstName }}
            {{ reservationDetail.ReservationVendor.LastName }}
          </p>
          <div>
            <h5>{{ t('PAX.TELP') }}</h5>
            <span>{{ reservationDetail.ReservationVendor.HomePhone }}</span>
          </div>
          <div>
            <h5>{{ t('PAX.EMAIL') }}</h5>
            <span>{{ reservationDetail.ReservationVendor.Email }}</span>
          </div>
        </div>
      </Card>
      <Card>
        <template v-slot:header>
          <span>{{ t('PASSENGER_DETAILS') }}</span>
        </template>
        <div
          class="booking__main-column-2"
          v-for="(pax, i) in reservationDetail.ReservationVendor.Pax"
        >
          <p class="span-2-column">
            {{ i + 1 }}. {{ pax.Title }}
            {{ pax.FirstName }}
            {{ pax.LastName }}
          </p>
          <div>
            <h5>{{ t('PAX.DOB') }}</h5>
            <span>{{ pax.BirtOfDate }}</span>
          </div>
          <div>
            <h5>{{ t('PAX.NATIONALITY') }}</h5>
            <span>{{ pax.Nationality }}</span>
          </div>
          <div>
            <h5>{{ t('PAX.ID_TYPE') }}</h5>
            <span>{{ pax.IdentityType }}</span>
          </div>
          <div>
            <h5>{{ t('PAX.ID_NO') }}</h5>
            <span>{{ pax.IdentityNumber }}</span>
          </div>
          <template v-if="pax.IdentityType !== 'NIK'">
            <div>
              <h5>{{ t('PAX.ID_NO') }}</h5>
              <span>{{ pax.IdentityNumber }}</span>
            </div>
            <div>
              <h5>{{ t('PAX.ID_NO') }}</h5>
              <span>{{ pax.IdentityNumber }}</span>
            </div>
          </template>
        </div>
      </Card>
    </div>
    <div class="booking__sidebar">
      <h3 class="booking__subtitle">{{ t('BOOKING_DETAILS') }}</h3>
      <Card alternate class="booking__timeline">
        <div class="booking__detail-status">
          <div>
            <span>Booking ID</span>
            <span>{{ reservation.ReservationCode }}</span>
          </div>
          <div>
            <span>Status</span>
            <span class="color-red">{{
              reservation.ReservationStatusDetail
            }}</span>
          </div>
          <div>
            <span>Batas Waktu Pembayaran</span>
            <span class="color-red">{{ reservation.TimeLimitPayment }}</span>
          </div>
        </div>
        <FlightCard
          :segment="departureFLights.Segments"
          :header="t('DEPARTURE')"
        />
        <FlightCard
          :segment="returnFlights.Segments"
          :header="t('RETURN')"
          v-if="returnFlights"
        />
        <div class="booking__price-detail">
          <h4 class="booking__price-detail_heading">Detail Harga</h4>
          <div>
            <span>Subtotal</span>
            <span
              ><b>{{ toIDR(reservation.TotalResult) }}</b></span
            >
          </div>
          <div v-if="reservation.VoucherCode">
            <span>{{ t('PROMO_CODE') }} ({{ reservation.VoucherCode }})</span>
            <span>{{
              toIDR(+reservation.TotalAfterDiscount - +reservation.TotalResult)
            }}</span>
          </div>
          <div class="booking__price-detail_total">
            <span>Total</span>
            <span class="color-red">{{
              toIDR(reservation.TotalAfterDiscount)
            }}</span>
          </div>
          <div class="promo-code">
            <div>
              <svg
                width="25"
                height="24"
                viewBox="0 0 25 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M22.6618 11.3353L21.0846 9.53826C20.9034 9.33187 20.8151 9.06006 20.8404 8.78661L21.0602 6.40793C21.1063 5.90835 20.7751 5.4519 20.2859 5.34077L17.9495 4.81008C17.6822 4.74935 17.4515 4.58151 17.3114 4.34583L16.089 2.28903C15.8325 1.85756 15.296 1.68303 14.8348 1.88108L12.6354 2.82553C12.3835 2.93371 12.0982 2.93371 11.8462 2.82553L9.64683 1.88108C9.18563 1.68303 8.64907 1.85756 8.39263 2.28903L7.17099 4.34449C7.03045 4.58096 6.7987 4.74909 6.53029 4.80931L4.1985 5.33251C3.70799 5.44257 3.37543 5.89967 3.42167 6.40025L3.64133 8.77766C3.66653 9.0505 3.57869 9.32173 3.39831 9.52798L1.81757 11.3355C1.48745 11.7129 1.48795 12.2765 1.81874 12.6534L3.39714 14.4518C3.57823 14.6581 3.66654 14.9298 3.64135 15.2032L3.42122 17.5922C3.3752 18.0917 3.70635 18.548 4.1955 18.6591L6.53207 19.1898C6.79942 19.2506 7.03012 19.4184 7.17019 19.6541L8.39151 21.709C8.64843 22.1413 9.18641 22.3155 9.64799 22.116L11.8453 21.166C12.0978 21.0568 12.384 21.0565 12.6367 21.165L14.8348 22.1088C15.296 22.3069 15.8325 22.1324 16.089 21.7009L17.3114 19.6441C17.4515 19.4084 17.6822 19.2406 17.9495 19.1798L20.2859 18.6491C20.7751 18.538 21.1063 18.0816 21.0602 17.582L20.8404 15.2033C20.8151 14.9299 20.9034 14.658 21.0846 14.4517L22.6618 12.6546C22.9931 12.2772 22.9931 11.7127 22.6618 11.3353ZM9.74072 11.995C10.5691 11.995 11.2407 11.3234 11.2407 10.495C11.2407 9.66654 10.5691 8.99496 9.74072 8.99496C8.9123 8.99496 8.24072 9.66654 8.24072 10.495C8.24072 11.3234 8.9123 11.995 9.74072 11.995ZM16.2407 14.495C16.2407 15.3234 15.5691 15.995 14.7407 15.995C13.9123 15.995 13.2407 15.3234 13.2407 14.495C13.2407 13.6665 13.9123 12.995 14.7407 12.995C15.5691 12.995 16.2407 13.6665 16.2407 14.495ZM16.13 8.60586C15.7394 8.21534 15.1063 8.21534 14.7157 8.60586L8.35178 14.9698C7.96126 15.3603 7.96126 15.9935 8.35178 16.384C8.74231 16.7746 9.37547 16.7746 9.766 16.384L16.13 10.0201C16.5205 9.62955 16.5205 8.99639 16.13 8.60586Z"
                  fill="#323C9F"
                />
              </svg>
              <span>Punya Kode Promo?</span>
            </div>
            <span>TAMBAH</span>
          </div>
          <Button type="button" variant="warning">{{ t('PAY_NOW') }}</Button>
        </div>
      </Card>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue';
import { useI18n } from 'vue-i18n';
import messages from './lang';

import { toIDR } from '../../../utils/index';

import Card from '../../atoms/cards/card.vue';
import FlightCard from '../../atoms/cards/flight-card.vue';
import Button from '../../atoms/button/button.vue';

interface ReservationDetail {
  BaseFare: 2496000;
  Currency: 'IDR';
  ReservationDetailId: 12036;
  SupplierId: 1;
  Tax: 1273960;
  Total: 3769960;
  ReservationVendor: any;
}

interface Reservation {
  Bank: string;
  CancelDate: string;
  CanceledBy: string;
  CardType: string;
  CompanyCode: string;
  CompanyName: string;
  CreatedDate: string;
  Currency: string;
  Discount: number;
  EmailBooking: number;
  EmailEticket: number;
  InstallmentPeriod: number;
  IsDoublePnr: boolean;
  IsInstallment: boolean;
  IsRoundTrip: boolean;
  IssueDate: string;
  MarkDown: number;
  MarkUp: number;
  Mdr: number;
  MemberEmail: string;
  MemberId: number;
  OriginalBank: string;
  PaidDate: string;
  PaymentCode: number;
  PaymentMethodCode: string;
  PaymentMethodId: number;
  PaymentMethodName: string;
  PaymentMethodSlug: string;
  PaymentStatus: string;
  PaymentStatusDetail: string;
  Platform: string;
  PointRate: number;
  PointUse: number;
  Remark: string;
  ReservationCode: string;
  ReservationDetail: ReservationDetail[];
  ReservationId: number;
  ReservationItinerary: number;
  ReservationItineraryDetail: string;
  ReservationStatus: string;
  ReservationStatusDetail: string;
  ReservationType: number;
  ReservationTypeDetail: string;
  ServiceFee: number;
  TimeLimitOrigin: string;
  TimeLimitPayment: string;
  Total: number;
  TotalAfterDiscount: number;
  TotalCharge: number;
  TotalResult: number;
  VaNumber: string;
  VoucherCode: string;
  VoucherId: number;
  VoucherName: string;
  is_bundle: number;
  is_wof: boolean;
  wof_url: string;
}

interface Props {
  data: any;
  reservation: string;
}

const props = defineProps<Props>();

const data = reactive(props.data ? JSON.parse(props.data) : null);

const reservation = reactive<Reservation>(
  props.reservation ? JSON.parse(props.reservation) : null
);

const departureFLights = reactive(JSON.parse(data.segment1));

const returnFlights = reactive(JSON.parse(data.segment2));

const reservationDetail = reactive(reservation.ReservationDetail[0]);

const { t } = useI18n({
  messages: messages,
});

console.log(data, reservation);
</script>

<style lang="scss">
@use '@/styles/booking-confirmation';
</style>

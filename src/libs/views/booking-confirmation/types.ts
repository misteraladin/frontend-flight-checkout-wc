export interface Country {
  CodeTelp: string;
  CountryCode: string;
  CountryName: string;
  Image: string;
}

export interface ReservationDetail {
  BaseFare: 2496000;
  Currency: 'IDR';
  ReservationDetailId: 12036;
  SupplierId: 1;
  Tax: 1273960;
  Total: 3769960;
  ReservationVendor: any;
}

export interface Reservation {
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

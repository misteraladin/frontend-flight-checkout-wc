export interface OriginDetail {
  Code: string;
  CityName: string;
  CountryCode: string;
  AirportName: string;
}

export interface DestinationDetail {
  Code: string;
  CityName: string;
  CountryCode: string;
  AirportName: string;
}

export interface Passport {
  PassportId: number;
  PaxId: number;
  Number: string;
  OriginCountry: string;
  Firstname: string;
  Lastname: string;
  Expire: string;
}

export interface Pax {
  PaxId: number;
  Index: string;
  Type: string;
  Title: string;
  FirstName: string;
  LastName: string;
  BirtOfDate: string;
  MobilePhone: string;
  HomePhone: string;
  TicketNumber: string;
  Nationality: string;
  IdNumber: string;
  Passport: Passport;
  IdentityType: string;
  IdentityNumber: string;
  IdentityExpireDate: string;
  IdentityIssueCountry: string;
}

export interface Segment {
  SegmentId: number;
  IsTransit: boolean;
  Airline: string;
  CarrierCode: string;
  AirlineName: string;
  FlightNumber: string;
  OperatingAirlineName: string;
  OperatingFlightNumber: string;
  Type: string;
  TypeDetail: string;
  BaggageAdult: string;
  BaggageChild: string;
  BaggageInfant: string;
  OriginTerminal: string;
  OriginDetail: OriginDetail;
  DestinationTerminal: string;
  DestinationDetail: DestinationDetail;
  Class: string;
  CabinClass: string;
  DepartDateTime: string;
  ArriveDateTime: string;
  FlightTime: string;
  TransitTime: string;
  AirlineImageUrl: string;
  OperatingAirlineImageUrl: string;
  IsCodeShare: boolean;
  WordingCodeShare: string;
  AirlineBookingCode: string;
  ShowBookingCode: string;
}

export interface Fare {
  FareId: number;
  Currency: string;
  BaseFare: number;
  NTA: number;
  MarkupMarkdown: number;
  Tax: number;
  Total: number;
}

export interface ReservationVendor {
  VendorReservationId: number;
  VendorReservationCode: string;
  FrontReservationCode: string;
  BookingCode: string;
  OriginDetail: OriginDetail;
  DestinationDetail: DestinationDetail;
  Status: string;
  TimeLimit: string;
  Itinerary: string;
  Title: string;
  FirstName: string;
  LastName: string;
  Email: string;
  MobilePhone: string;
  HomePhone: string;
  Pax: Pax[];
  Segment: Segment[];
  Fare: Fare;
  IsGds: boolean;
  TravelTime: string;
  TravelTimeDepart: string;
  TravelTimeReturn: string;
  TotalTransit: number;
  TotalTransitDepart: number;
  TotalTransitReturn: number;
}

export interface ReservationDetail {
  ReservationDetailId: number;
  SupplierId: number;
  Currency: string;
  BaseFare: number;
  Tax: number;
  Total: number;
  ReservationVendor: ReservationVendor;
}

export interface RootObject {
  MemberId: number;
  MemberEmail: string;
  ReservationId: number;
  ReservationType: number;
  ReservationTypeDetail: string;
  ReservationItinerary: number;
  ReservationItineraryDetail: string;
  IsRoundTrip: boolean;
  IsDoublePnr: boolean;
  ReservationCode: string;
  ReservationStatus: string;
  ReservationStatusDetail: string;
  PointRate: number;
  PointUse: number;
  VoucherId: number;
  VoucherName: string;
  VoucherCode: string;
  Discount: number;
  Currency: string;
  MarkUp: number;
  MarkDown: number;
  Total: number;
  TotalAfterDiscount: number;
  TotalCharge: number;
  TotalResult: number;
  Platform: string;
  PaymentCode: number;
  IsInstallment: boolean;
  InstallmentPeriod: number;
  Mdr: number;
  ServiceFee: number;
  Bank: string;
  OriginalBank: string;
  CardType: string;
  PaymentMethodId: number;
  PaymentMethodName: string;
  PaymentMethodCode: string;
  CompanyCode: string;
  CompanyName: string;
  PaymentStatus: string;
  PaymentStatusDetail: string;
  TimeLimitOrigin: string;
  TimeLimitPayment: string;
  PaidDate: string;
  IssueDate: string;
  CancelDate: string;
  CanceledBy: string;
  CreatedDate: string;
  EmailBooking: number;
  EmailEticket: number;
  Remark: string;
  is_wof: boolean;
  wof_url?: any;
  ReservationDetail: ReservationDetail[];
}

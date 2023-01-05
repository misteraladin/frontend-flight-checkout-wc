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

export interface CountryCode {
  CodeTelp: string;
  CountryCode: string;
  CountryName: string;
  Image: string;
}

export interface RootObject {
  segment1: string;
  segment2: string;
  FareDetailCodeDepart: string;
  FareDetailCodeReturn: string;
  adult: string;
  child: string;
  infant: string;
  passengerNum: string;
  departDate: string;
  returnDate: string;
  trip: string;
  origin: string;
  destination: string;
  desc: string;
}

export interface AmountComponent {
  Component: string;
  Amount: number;
}

export interface Detail {
  Code: string;
  Text: string;
  Amount: number;
  Currency: string;
  ForeignAmount: number;
  ForeignCurrency: string;
  AmountComponent: AmountComponent[];
}

export interface FareDetail {
  ClassID: string;
  FlightId: string;
  Total: number;
  Currency: string;
  ForeignTotal: number;
  ForeignTotalCurrency: string;
  Details: Detail[];
}

export interface Badge {
  Id: number;
  Product: string;
  BadgeName: string;
  BadgeImage: string;
  Sequence: number;
  ApplicableToDesktop: number;
  ApplicableToApps: number;
  BadgeDescription: string;
}

export interface AmountComponent {
  Component: string;
  Amount: number;
}

export interface Details {
  Code: string;
  Text: string;
  Amount: number;
  Currency: string;
  ForeignAmount: number;
  ForeignCurrency: string;
  AmountComponent: AmountComponent[];
}

export interface FareDetail {
  ClassID: string;
  FlightId: string;
  Total: number;
  Currency: string;
  ForeignTotal: number;
  ForeignTotalCurrency: string;
  Details: Details[];
}

export interface Departure {
  FlightId: string;
  ClassId: string;
  Airline: number;
  AirlineName: string;
  AirlineImageUrl: string;
  Aircraft: string;
  FlightNumber: string;
  CarrierCode: string;
  OperatingAirlineName: string;
  OperatingAircraft: string;
  OperatingAirlineImageUrl: string;
  OperatingNumber: string;
  IsCodeShare: boolean;
  WordingCodeShare: string;
  Origin: string;
  OriginName: string;
  OriginCityName: string;
  OriginTerminal: string;
  DepartDate: string;
  DepartTime: string;
  Destination: string;
  DestinationName: string;
  DestinationCityName: string;
  DestinationTerminal: string;
  ArriveDate: string;
  ArriveTime: string;
  Badges: Badge[];
  SegmentSellKey: string;
  FareSellKey: string;
  JourneySellKey: string;
  FareDetail: FareDetail;
  ClassCode: string;
  ClassCategory: string;
  Baggage: string;
  BaggageWording: string;
  BaggageCabin: string;
  BaggageCabinWording: string;
  InFlightMeal: string;
  InFlightEntertaiment: string;
  InFlightPower: string;
  Seat: number;
  FlightTime: string;
  TransitTime: string;
  Num: number;
  Seq: number;
  NextClass: any[];
}

export interface Segments {
  TotalTransitDepart: number;
  TotalTransitReturn: number;
  TravelTimeDepart: string;
  TravelTimeReturn: string;
  Departure: Departure[];
  Return: any[];
}

export interface Segment {
  GroupingId: string;
  Airline: number;
  FlightType: string;
  FlightKey: string;
  FareBreakdownsPerPax: number;
  FarePerPax: number;
  markupMarkdownPerPax: number;
  Fare: number;
  FareAfterDiscount: number;
  JourneySellKey: string;
  FareDetail: FareDetail;
  Discount: number;
  MarkupMarkdown: number;
  FlightFare: number;
  FlightTax: number;
  ClassId: string;
  FlightId: string;
  ClassCode: string;
  ClassCategory: string;
  NextClass: any[];
  FareDetailCode: string;
  Segments: Segments;
}

export interface Passenger {
  title: string;
  firstName: string;
  middleName: string;
  lastName: string;
  nationality: string;
  dob: string;
  idType: string;
  idNo: string;
  idExpiry: string;
  idOrigin: string;
}

export interface Contact {
  title: string;
  firstName: string;
  middleName: string;
  lastName: string;
  phoneCode: string;
  phoneNumber: string;
  email: string;
}

interface Passengers {
  adult: Passenger[];
  child: Passenger[];
  infant: Passenger[];
}

export interface Form {
  contact: Contact;
  passengers: Passengers;
}

export interface Segments {
  TotalTransitDepart: number;
  TotalTransitReturn: number;
  TravelTimeDepart: string;
  TravelTimeReturn: string;
  Departure: Departure[];
  Return: any[];
}

export interface Segment {
  GroupingId: string;
  Airline: number;
  FlightType: string;
  FlightKey: string;
  FareBreakdownsPerPax: number;
  FarePerPax: number;
  markupMarkdownPerPax: number;
  Fare: number;
  FareAfterDiscount: number;
  JourneySellKey: string;
  FareDetail: FareDetail;
  Discount: number;
  MarkupMarkdown: number;
  FlightFare: number;
  FlightTax: number;
  ClassId: string;
  FlightId: string;
  ClassCode: string;
  ClassCategory: string;
  NextClass: any[];
  FareDetailCode: string;
  Segments: Segments;
}

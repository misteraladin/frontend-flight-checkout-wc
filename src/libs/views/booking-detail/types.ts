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
  Return: Departure[];
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

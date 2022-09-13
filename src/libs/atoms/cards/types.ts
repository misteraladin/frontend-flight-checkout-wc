export interface Badge {}

export interface FareDetail {
  Amount: number;
  Code: string;
  Currency: string;
  ForeignAmount: number;
  ForeignCurrency: string;
  Text: string;
}

export interface FareDetailCollection {
  ClassID: string;
  Currency: string;
  Details: FareDetail[];
  FlightId: string;
  ForeignTotal: number;
  ForeignTotalCurrency: string;
  Total: number;
}

export interface Flight {
  Aircraft: string;
  Airline: number;
  AirlineImageUrl: string;
  AirlineName: string;
  ArriveDate: string;
  ArriveTime: string;
  Badges: Badge[];
  Baggage: string;
  BaggageCabin: string;
  BaggageCabinWording: string;
  BaggageWording: string;
  CarrierCode: string;
  ClassCategory: string;
  ClassCode: string;
  ClassId: string;
  DepartDate: string;
  DepartTime: string;
  Destination: string;
  DestinationCityName: string;
  DestinationName: string;
  DestinationTerminal: string;
  FareDetail: FareDetailCollection;
  FareSellKey: string;
  FlightId: string;
  FlightNumber: string;
  FlightTime: string;
  InFlightEntertaiment: string;
  InFlightMeal: string;
  InFlightPower: string;
  IsCodeShare: false;
  JourneySellKey: string;
  NextClass: any[];
  Num: number;
  OperatingAircraft: string;
  OperatingAirlineImageUrl: string;
  OperatingAirlineName: string;
  OperatingNumber: string;
  Origin: string;
  OriginCityName: string;
  OriginName: string;
  OriginTerminal: string;
  Seat: number;
  SegmentSellKey: string;
  Seq: number;
  TransitTime: string;
  WordingCodeShare: string;
}

export interface Segment {
  Departure: Flight[];
  Return: Flight[];
  TotalTransitDepart: number;
  TotalTransitReturn: number;
  TravelTimeDepart: number;
  TravelTimeReturn: number;
}

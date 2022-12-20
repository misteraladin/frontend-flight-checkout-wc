import { Pax as IPassenger } from "../libs/pages/booking-confirmation-mobile/type";

export const sortedPassengers = (passengers: IPassenger[]): IPassenger[] => {
  const adults = passengers.filter(
    (passenger: IPassenger) =>
      passenger.Type === "Dewasa" || passenger.Type === "Adult"
  );
  const childs = passengers.filter(
    (passenger: IPassenger) =>
      passenger.Type === "Anak" || passenger.Type === "Child"
  );
  const babies = passengers.filter(
    (passenger: IPassenger) =>
      passenger.Type === "Bayi" || passenger.Type === "Infant"
  );

  return [...adults, ...childs, ...babies];
};

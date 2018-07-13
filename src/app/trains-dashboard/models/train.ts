import { Wagon } from './wagon';

export interface Train {
  departureDestination: string;
  arrivalDestination: string;
  id: string;
  name: string;
  numberOfSeats: number;
  seatsReserved: number;
  departureTime: number;
  arrivalTime: number;
  confirmed: boolean;
  wagons: Wagon[] | null;
}

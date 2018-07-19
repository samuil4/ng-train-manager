import { Wagons } from '@shared/models/wagons';

export interface ITrain {
  departureDestination: string;
  arrivalDestination: string;
  name: string;
  numberOfSeats?: number;
  seatsReserved?: number;
  departureTime?: number;
  arrivalTime?: number;
  confirmed?: boolean;
  wagons?: Wagons | null;

  // Firebase related
  $key: string;
}

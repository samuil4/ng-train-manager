import { Wagons } from '@shared/models/wagons';

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
  wagons: Wagons | null;

  // Firebase related
  $key: string;
  $exist: () => boolean;
}

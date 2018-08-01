import { ISeat } from './seat.interface';

export type SeatType = 'economy' | 'business';

export interface IWagon {
  seats: ISeat[];
  type: SeatType;
  name: string;

  $key?: string;
}

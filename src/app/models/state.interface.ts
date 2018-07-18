import { User } from '../auth/models/user.interface';
import { Train } from '@shared/models/train';
import { Wagons } from '@shared/models/wagons';

export interface State {
  tickets: any[];
  wagons: Wagons;
  trains: Train[];
  user: User;
  // [key: string]: any;
}

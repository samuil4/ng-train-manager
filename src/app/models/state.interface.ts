import { User } from '../auth/models/user.interface';
import { Wagons } from '@shared/models/wagons';
import { TrainCollection } from '@shared/models/train.collection';

export interface State {
  tickets: any[];
  wagons: Wagons;
  trains: TrainCollection;
  user: User;
  // [key: string]: any;
}

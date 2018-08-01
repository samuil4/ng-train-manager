import { ITrain } from '@shared/models/train.interface';

export interface ITrainModel extends ITrain {
  departureDate: Date;
  arrivalDate: Date;
  name: string;
  confirmed: boolean;
}

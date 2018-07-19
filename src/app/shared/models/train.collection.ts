import { Collection } from './collection';
import { TrainModel } from '@shared/models/train.model';

export class TrainCollection extends Collection {
  constructor(rawCollection) {
    super(rawCollection, TrainModel);
  }
}

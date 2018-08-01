import { Collection } from './collection';
import { WagonModel } from '@shared/models/wagon.model';

export class WagonCollection extends Collection {
  constructor(rawCollection) {
    super(rawCollection, WagonModel);
  }
}

import { Collection } from './collection';
import { WagonModel } from '@shared/models/wagon.model';
import { IWagon } from '@shared/models/wagon.interface';

export class WagonCollection extends Collection {
  constructor(rawCollection) {
    super(rawCollection, WagonModel);
  }

  containsInName(searchValue: any): IWagon[] {
    return this.models.filter(model => {
      return model.name.includes(searchValue);
    });
  }
}

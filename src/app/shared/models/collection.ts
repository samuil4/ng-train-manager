import { SearchResult } from '@sq-ui/ng-sq-ui';

export class Collection {
  private model: any;
  private values: any[];

  constructor(rawCollection: any[], model) {
    this.model = model;
    this.values = rawCollection.map(collectionItem => {
      return new this.model(collectionItem);
    });
  }

  get models(): any[] {
    return this.values;
  }

  getModel(id: string): any {
    // Filter returns [] ^_^
    return this.values.filter(item => {
      return item.$key === id;
    })[0];
  }

  filter(key: string, searchValue: any): any {
    return this.models.filter(model => {
      return model[key] === searchValue;
    });
  }

  toSearchResult(results: any[]): SearchResult[] {
    return results.map(item => {
      return {
        value: item,
        displayName: item.name,
      };
    });
  }
}

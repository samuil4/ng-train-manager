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
}

export class Collection {
  private model: any;
  private values: any[];

  constructor(rawCollection: any[], model) {
    this.model = model;
    this.values = rawCollection.map((collectionItem) => {
      return new this.model(collectionItem);
    });
  }

  get models(): any[] {
    return this.values;
  }

  getModel(id: string): any {
    // Filter returns [] ^_^
    return this.values.filter((item) => {
      return item.$key === id;
    })[0];
  }
}

import { BehaviorSubject, Observable } from 'rxjs';
import { distinctUntilChanged, pluck } from 'rxjs/operators';

/**
 * Store implementation
 *
 * Add to store
 * store.set('trains', [train, train])
 *
 * Retrieve from
 * store.select('trains')
 *
 */

import { State } from './models/state.interface';

const initialState: State = {
  // set initial values
  trains: undefined,
  tickets: undefined,
  wagons: undefined,
  user: undefined,
};

export class Store {
  // Create new BehaviorSubject with an inital state values
  private subject = new BehaviorSubject<State>(initialState);
  // Any new component will receive the last value of state
  // We update the state by calling .next()

  // distinctUntilChanged will not notify subscribers for duplicate values
  private store = this.subject.asObservable().pipe(distinctUntilChanged());

  set(name: string, newState: any) {
    // add immutability when merging state
    this.subject.next({
      ...this.value,
      [name]: newState,
    });
  }

  // Get the state value from store
  get value() {
    return this.subject.value;
  }

  // Select property from store
  // Example: store.select<Tain[]>('trains')
  select<T>(name: string): Observable<T> {
    // pluck will return a new observable from a property of the store
    return this.store.pipe(pluck(name));
  }
}

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

// 1. Add State interface representing the data we will have in our store
import { State } from './models/state.interface';

// 2 Create a state const with intal values
const initialState: State = {
  trains: undefined, // set initial value
  user: undefined,
};

export class Store {
  // 3 Create new BehaviorSubject with an inital state values
  private subject = new BehaviorSubject<State>(initialState);
  // Any new component will receive the last value of state
  // We update the state by calling .next()

  // 3 distinctUntilChanged will not notify subscribers for duplicate values
  private store = this.subject.asObservable().pipe(distinctUntilChanged());

  // 4
  set(name: string, newState: any) {
    // 4.1 - add immutability when merging state
    this.subject.next({
      ...this.value,
      [name]: newState,
    });
  }

  // 5 Get the state value from store
  get value() {
    return this.subject.value;
  }

  // 6 Select property from store
  // Example: store.select<Tain[]>('trains')
  select<T>(name: string): Observable<T> {
    // pluck will return a new observable from a property of the store
    return this.store.pipe(pluck(name));
    // Show example of getting the store
  }
}

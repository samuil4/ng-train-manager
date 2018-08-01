import { Injectable } from '@angular/core';

import { AngularFireDatabase } from 'angularfire2/database';

// Store
import { Store } from '@store';

// Other services
import { Observable } from 'rxjs';

// Models / Interfaces
import { IWagon } from '@shared/models/wagon.interface';
import { WagonCollection } from '@shared/models/wagon.collection';
import { tap, map } from 'rxjs/operators';
import { AuthService } from '@app/auth-shared/services/auth/auth.service';

@Injectable({
  providedIn: 'root',
})
export class WagonService {
  wagons: Observable<IWagon[]>;

  constructor(
    private store: Store,
    private afDb: AngularFireDatabase,
    private authService: AuthService,
  ) {
    // valueChanges returns an Observable
    // https://github.com/angular/angularfire2/blob/master/docs/rtdb/lists.md
    this.wagons = this.afDb
      .list('wagons')
      .snapshotChanges()
      .pipe(
        map(next => {
          return next.map(item => {
            return {
              $key: item.key,
              ...item.payload.val(),
            };
          });
        }),
        tap(nextValue => {
          this.store.set('wagons', new WagonCollection(nextValue));
        }),
      );
  }

  get uid() {
    return this.authService.user.uid;
  }

  addWagon(wagon: IWagon) {
    return this.afDb.list(`wagons`).push(wagon);
  }

  getWagon($key: string) {
    return this.afDb.list(`wagons`, ref => {
      return ref.child($key);
    });
  }

  removeWagon(key: string) {
    return this.afDb.list(`wagons`).remove(key);
  }
}

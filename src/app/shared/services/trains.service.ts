import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

// Store
import { Store } from '@store';

// Other services
import { Observable } from 'rxjs';

// Models / Interfaces
import { ITrain } from '@shared/models/train.interface';
import { TrainCollection } from '@shared/models/train.collection';
import { tap, map } from 'rxjs/operators';
import { AuthService } from '@app/auth-shared/services/auth/auth.service';

@Injectable({
  providedIn: 'root',
})
export class TrainsService {
  trains: Observable<ITrain[]>;

  constructor(
    private store: Store,
    private afDb: AngularFireDatabase,
    private authService: AuthService,
  ) {
    // valueChanges returns an Observable
    // https://github.com/angular/angularfire2/blob/master/docs/rtdb/lists.md
    this.trains = this.afDb
      .list('trains')
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
          this.store.set('trains', new TrainCollection(nextValue));
        }),
      );
  }

  get uid() {
    return this.authService.user.uid;
  }

  addTrain(train: ITrain) {
    return this.afDb.list(`trains`).push(train);
  }

  getTrain($key: string) {
    return this.afDb.list(`trains`, ref => {
      return ref.child($key);
    });
  }

  editTrain($key: string, train: ITrain) {
    return this.afDb.list(`trains`).update($key, train);
  }

  removeTrain(key: string) {
    return this.afDb.list(`trains`).remove(key);
  }
}

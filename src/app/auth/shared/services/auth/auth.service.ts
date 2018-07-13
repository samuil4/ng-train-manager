import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
// 1. Import store
import { Store } from '@store';
// 3. Import tap operator
import { tap } from 'rxjs/operators';
// 5 import the user
import { User } from '../../../models/user.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  // 2. Assign authState observalbe
  auth = this.afAuth.authState
    // 4 use tap to hook on authentiate change;
    .pipe(
      tap(next => {
        if (!next) {
          // 6 Handle no user
          this.store.set('user', null);
        } else {
          // 6 Assign legged in user
          const user: User = {
            uid: next.uid,
            email: next.email,
            authenticated: true,
          };

          // 7 Set the user to the store
          this.store.set('user', user);
        }
      }),
    );

  constructor(private afAuth: AngularFireAuth, private store: Store) {}

  createUser(email: string, password: string) {
    return this.afAuth.auth.createUserWithEmailAndPassword(email, password);
  }

  logInUser(email: string, password: string) {
    return this.afAuth.auth.signInWithEmailAndPassword(email, password);
  }
}

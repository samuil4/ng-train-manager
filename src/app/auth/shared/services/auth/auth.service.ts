import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';

import { Store } from '@store';
import { tap } from 'rxjs/operators';
import { User } from '../../../models/user.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  auth = this.afAuth.authState.pipe(
    tap((next) => {
      if (!next) {
        this.store.set('user', null);
      } else {
        const user: User = {
          uid: next.uid,
          email: next.email,
          authenticated: true,
        };

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

  // 18.07.2018
  logoutUser() {
    return this.afAuth.auth.signOut();
  }

  // 18.07.2018
  get authState() {
    return this.afAuth.authState;
  }

  // 18.07.2018
  get user() {
    return this.afAuth.auth.currentUser;
  }
}

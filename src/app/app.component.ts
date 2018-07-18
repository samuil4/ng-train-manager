import { Component, ViewEncapsulation, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@store';
import { AuthService } from '@app/auth-shared/services/auth/auth.service';
import { Observable, Subscription } from 'rxjs';
import { User } from './auth/models/user.interface';
import { Router } from '@angular/router';

@Component({
  // tslint:disable-next-line
  selector: 'body',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'app';

  user: Observable<User>;
  subscription: Subscription;

  // Example of store
  constructor(
    private store: Store,
    private authService: AuthService,
    private router: Router,
  ) {
    console.log(this.store);
  }

  ngOnInit() {
    // 1. Start the auth service and initiate the data flow
    this.subscription = this.authService.auth.subscribe();
    // 2. Subscribe to user change
    this.user = this.store.select<User>('user');

    console.log(this.user);
  }

  ngOnDestroy() {
    // Don't forget to unsubscribe
    this.subscription.unsubscribe();
  }

  async executeLogout() {
    await this.authService.logoutUser();
    this.router.navigate(['auth', 'login']);
  }
}

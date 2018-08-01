import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription, Observable } from 'rxjs';
import { WagonModel } from '@shared/models/wagon.model';
import { IWagon } from '@shared/models/wagon.interface';
import { Store } from '@store';
import { Router } from '@angular/router';
import { WagonService } from '@shared/services/wagon.service';

@Component({
  selector: 'app-view-all-wagons',
  templateUrl: './view-all-wagons.component.html',
  styleUrls: ['./view-all-wagons.component.scss'],
})
export class ViewAllWagonsComponent implements OnInit, OnDestroy {
  wagons: Observable<IWagon[]>;
  subscription: Subscription;

  constructor(
    private wagonService: WagonService,
    private store: Store,
    private router: Router,
  ) {}

  ngOnInit() {
    this.wagons = this.store.select<IWagon[]>('wagons');
    // Start data flow with subscription
    this.subscription = this.wagonService.wagons.subscribe();
  }

  ngOnDestroy() {
    // Remove subscriptions
    this.subscription.unsubscribe();
  }

  executeDelete(wagon: WagonModel) {
    this.wagonService.removeWagon(wagon.$key);
  }

  executeView(wagon: WagonModel) {
    this.router.navigate(['wagons', wagon.$key]);
  }
}

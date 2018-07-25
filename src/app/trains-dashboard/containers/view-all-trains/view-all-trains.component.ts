import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription, Observable } from 'rxjs';
// Services
import { TrainsService } from '@shared/services/trains.service';
// Models
import { ITrain } from '@shared/models/train.interface';
import { Store } from '@store';
import { TrainModel } from '@shared/models/train.model';
import { Router } from '@angular/router';
@Component({
  selector: 'app-view-all-trains',
  templateUrl: './view-all-trains.component.html',
  styleUrls: ['./view-all-trains.component.scss'],
})
export class ViewAllTrainsComponent implements OnInit, OnDestroy {
  trains: Observable<ITrain[]>;
  subscription: Subscription;

  constructor(
    private trainsService: TrainsService,
    private store: Store,
    private router: Router,
  ) {}

  ngOnInit() {
    this.trains = this.store.select<ITrain[]>('trains');
    // Start data flow with subscription
    this.subscription = this.trainsService.trains.subscribe();
  }

  ngOnDestroy() {
    // Remove subscriptions
    this.subscription.unsubscribe();
  }

  executeDelete(train: TrainModel) {
    this.trainsService.removeTrain(train.$key);
  }

  executeView(train: TrainModel) {
    this.router.navigate(['trains', train.$key]);
  }
}

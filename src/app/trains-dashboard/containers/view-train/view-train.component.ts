import { Component, OnInit, OnDestroy } from '@angular/core';
import { TrainsService } from '@shared/services/trains.service';
import { ActivatedRoute, Router } from '@angular/router';
import { TrainModel } from '@shared/models/train.model';
import { Store } from '@store';
import { Subscription, Subject } from 'rxjs';
import { TrainCollection } from '@shared/models/train.collection';
import { takeUntil } from '../../../../../node_modules/rxjs/operators';
@Component({
  selector: 'app-view-train',
  templateUrl: './view-train.component.html',
  styleUrls: ['./view-train.component.scss'],
})
export class ViewTrainComponent implements OnInit, OnDestroy {
  train: TrainModel;
  subscription: Subscription;
  destroy = new Subject();

  constructor(
    private trainsService: TrainsService,
    private route: ActivatedRoute,
    private router: Router,
    private store: Store,
  ) {}

  ngOnInit() {
    const { id } = this.route.snapshot.params;

    this.store
      .select<TrainCollection>('trains')
      .pipe(takeUntil(this.destroy))
      .subscribe(next => {
        if (next) {
          this.train = next.getModel(id);
        }
      });

    // Start data flow with subscription
    this.trainsService.trains.pipe(takeUntil(this.destroy)).subscribe();
  }

  ngOnDestroy() {
    this.destroy.next();
    this.destroy.complete();
  }

  async editTrain(train: TrainModel) {
    const key = train.$key;
    await this.trainsService.editTrain(key, train.toJSON());
    this.router.navigate(['trains']);
  }
}

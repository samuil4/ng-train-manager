import { Component, OnInit, OnDestroy } from '@angular/core';
import { IWagon } from '@shared/models/wagon.interface';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@store';
import { WagonCollection } from '../../../shared/models/wagon.collection';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { WagonService } from '@shared/services/wagon.service';

@Component({
  selector: 'app-view-wagon',
  templateUrl: './view-wagon.component.html',
  styleUrls: ['./view-wagon.component.scss'],
})
export class ViewWagonComponent implements OnInit, OnDestroy {
  wagon: IWagon;
  destroy = new Subject();

  constructor(
    private route: ActivatedRoute,
    private store: Store,
    private wagonService: WagonService,
  ) {}

  ngOnInit() {
    const { id } = this.route.snapshot.params;

    this.store
      .select<WagonCollection>('wagons')
      .pipe(takeUntil(this.destroy))
      .subscribe(next => {
        if (next) {
          this.wagon = next.getModel(id);
          console.log(this.wagon);
        }
      });

    this.wagonService.wagons.pipe(takeUntil(this.destroy)).subscribe();
  }

  ngOnDestroy() {
    this.destroy.next();
    this.destroy.complete();
  }
}

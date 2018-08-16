import {
  Component,
  ChangeDetectionStrategy,
  EventEmitter,
  Output,
  Input,
  OnChanges,
  SimpleChanges,
  OnInit,
  OnDestroy,
} from '@angular/core';
import { ITrain } from '@shared/models/train.interface';
import { FormBuilder, Validators } from '@angular/forms';
import { TrainModel } from '@shared/models/train.model';
import { Wagons } from '@shared/models/wagons';
import { Observable, Subscription } from 'rxjs';
import { IWagon } from '@shared/models/wagon.interface';
import { Store } from '@store';
import { WagonService } from '@shared/services/wagon.service';
import { take } from 'rxjs/operators';
import { WagonCollection } from '@shared/models/wagon.collection';
import { SearchResult } from '@sq-ui/ng-sq-ui';

@Component({
  selector: 'app-train-form',
  templateUrl: './train-form.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./train-form.component.css'],
})
export class TrainFormComponent implements OnChanges, OnInit, OnDestroy {
  @Output()
  action = new EventEmitter<ITrain>();
  @Input()
  train: TrainModel;
  defaultTrainValues = new TrainModel();

  availableWagons: SearchResult[];
  wagons: Observable<WagonCollection>;
  wagonsSubscription: Subscription;

  form = this.fb.group({
    name: [this.defaultTrainValues.name, Validators.required],
    departureDestination: [
      this.defaultTrainValues.departureDestination,
      Validators.required,
    ],
    arrivalDestination: [
      this.defaultTrainValues.arrivalDestination,
      Validators.required,
    ],
    departureDate: [this.defaultTrainValues.departureDate, Validators.required],
    arrivalDate: [this.defaultTrainValues.arrivalDate, Validators.required],
    confirmed: [false, Validators.required],
    trainWagons: [[], Validators.required],
  });

  constructor(
    private fb: FormBuilder,
    private wagonService: WagonService,
    private store: Store,
  ) {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes.train.currentValue) {
      this.form.patchValue(changes.train.currentValue);
    }
  }

  ngOnInit() {
    this.wagons = this.store.select<WagonCollection>('wagons');
    // Start data flow with subscription
    this.wagonsSubscription = this.wagonService.wagons.subscribe();
  }

  ngOnDestroy() {
    this.wagonsSubscription.unsubscribe();
  }

  searchMethod(query) {
    console.log(query);
    // Assign to availableWagons

    this.wagons.pipe(take(1)).subscribe(val => {
      const results = val.containsInName(query);
      this.availableWagons = val.toSearchResult(results);
    });
  }

  executeActionTrain() {
    if (this.form.valid) {
      const newTrain = new TrainModel();
      newTrain.value = this.form.value;
      if (this.train) {
        newTrain.$key = this.train.$key;
      }
      this.action.emit(newTrain);
    }
  }

  get nameInvalid(): boolean {
    const field = this.form.get('name');
    return field.hasError('required') && field.touched;
  }

  get departureDestinationInvalid(): boolean {
    const field = this.form.get('departureDestination');
    return field.hasError('required') && field.touched;
  }

  get arrivalDestinationInvalid(): boolean {
    const field = this.form.get('arrivalDestination');
    return field.hasError('required') && field.touched;
  }

  get arrivalDateInvalid(): boolean {
    const field = this.form.get('arrivalDate');
    return field.hasError('required') && field.touched;
  }

  get departureDateInvalid(): boolean {
    const field = this.form.get('departureDate');
    return field.hasError('required') && field.touched;
  }
}

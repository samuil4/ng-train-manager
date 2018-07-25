import {
  Component,
  ChangeDetectionStrategy,
  EventEmitter,
  Output,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { ITrain } from '@shared/models/train.interface';
import { FormBuilder, Validators } from '@angular/forms';
import { TrainModel } from '@shared/models/train.model';

@Component({
  selector: 'app-train-form',
  templateUrl: './train-form.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./train-form.component.css'],
})
export class TrainFormComponent implements OnChanges {
  @Output() action = new EventEmitter<ITrain>();
  @Input() train: TrainModel;
  defaultTrainValues = new TrainModel();

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
  });

  constructor(private fb: FormBuilder) {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes.train.currentValue) {
      // TO DO check if it works
      this.form.patchValue(changes.train.currentValue);
      console.log(changes.train.currentValue, this.form.value);
    }
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

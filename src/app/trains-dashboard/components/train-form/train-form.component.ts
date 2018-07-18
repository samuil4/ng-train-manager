import {
  Component,
  ChangeDetectionStrategy,
  EventEmitter,
  Output,
} from '@angular/core';
import { Train } from '@shared/models/train';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-train-form',
  templateUrl: './train-form.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./train-form.component.css'],
})
export class TrainFormComponent {
  @Output() create = new EventEmitter<Train>();

  form = this.fb.group({
    name: ['', Validators.required],
    departureDestination: ['', Validators.required],
    arrivalDestination: ['', Validators.required],
    departureTime: [Date.now(), Validators.required],
    arrivalTime: [Date.now(), Validators.required],
    confirmed: [false, Validators.required],
  });

  constructor(private fb: FormBuilder) {}

  createTrain() {
    console.log(this.form);
    if (this.form.valid) {
      this.create.emit(this.form.value);
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
}

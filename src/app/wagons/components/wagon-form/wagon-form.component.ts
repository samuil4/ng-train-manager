import {
  Component,
  ChangeDetectionStrategy,
  EventEmitter,
  Output,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { SeatType, IWagon } from '@shared/models/wagon.interface';
import { FormBuilder, Validators } from '@angular/forms';
import { WagonModel } from '@shared/models/wagon.model';

const re = '^d*[02468]$';
@Component({
  selector: 'app-wagon-form',
  templateUrl: './wagon-form.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./wagon-form.component.css'],
})
export class WagonFormComponent implements OnChanges {
  @Output()
  action = new EventEmitter<IWagon>();
  @Input()
  wagon: WagonModel;
  defaultWagonValues = new WagonModel();

  seatTypes: SeatType[] = ['business', 'economy'];

  form = this.fb.group({
    name: [this.defaultWagonValues.name, Validators.required],
    type: ['economy', Validators.required],
    rowCount: [10, Validators.required],
    columnCount: [
      2,
      [
        Validators.required,
        Validators.max(6),
        Validators.min(2),
        Validators.pattern(re),
      ],
    ],
  });

  constructor(private fb: FormBuilder) {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes.wagon.currentValue) {
      // TO DO check if it works
      this.form.patchValue(changes.wagon.currentValue);
      console.log(changes.wagon.currentValue, this.form.value);
    }
  }

  get nameInvalid(): boolean {
    const field = this.form.get('name');
    return field.hasError('required') && field.touched;
  }

  executeActionWagon() {
    if (this.form.valid) {
      const newWagon = new WagonModel();
      newWagon.value = this.form.value;
      newWagon.createSeats(
        this.form.value.rowCount,
        this.form.value.columnCount,
      );
      console.log(newWagon);
      if (this.wagon) {
        newWagon.$key = this.wagon.$key;
      }
      this.action.emit(newWagon);
    }
  }
}

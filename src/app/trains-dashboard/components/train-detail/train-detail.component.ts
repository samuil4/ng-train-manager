import {
  Component,
  Input,
  OnChanges,
  SimpleChanges,
  Output,
  EventEmitter,
} from '@angular/core';

import { ITrain } from '@shared/models/train.interface';
import { TrainsService } from '@shared/services/trains.service';

@Component({
  selector: 'app-train-detail',
  templateUrl: './train-detail.component.html',
  styleUrls: ['./train-detail.component.scss'],
})
export class TrainDetailComponent implements OnChanges {
  @Input() train: ITrain;
  @Output() delete: EventEmitter<ITrain> = new EventEmitter();
  @Output() view: EventEmitter<ITrain> = new EventEmitter();
  editing = false;
  constructor(private service: TrainsService) {}

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
    this.train = { ...changes.train.currentValue };
  }

  deleteTrain() {
    this.delete.emit(this.train);
  }

  toggleEdit() {
    this.editing = !this.editing;
  }

  updateDestination(newDestination: string): void {
    this.train.arrivalDestination = newDestination;
  }

  updateOrigin(newOrigin: string): void {
    this.train.departureDestination = newOrigin;
  }

  viewTrain(): void {
    this.view.emit(this.train);
  }
}

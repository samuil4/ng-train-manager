import {
  Component,
  Input,
  OnChanges,
  SimpleChanges,
  Output,
  EventEmitter,
} from '@angular/core';
import { Train } from '../../models/train';

import { TrainDashboardService } from '../../train-dashboard.service';

@Component({
  selector: 'app-train-detail',
  templateUrl: './train-detail.component.html',
  styleUrls: ['./train-detail.component.scss'],
})
export class TrainDetailComponent implements OnChanges {
  @Input() train: Train;
  @Output() edit: EventEmitter<Train> = new EventEmitter();
  @Output() delete: EventEmitter<Train> = new EventEmitter();
  @Output() view: EventEmitter<Train> = new EventEmitter();
  editing = false;
  constructor(private service: TrainDashboardService) {}

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
    this.train = Object.assign({}, changes.train.currentValue);
  }

  deleteTrain() {
    this.delete.emit(this.train);
  }

  toggleEdit() {
    if (this.editing) {
      this.edit.emit(this.train);
    }

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

import { Component, Input } from '@angular/core';
import { ITrain } from '@shared/models/train.interface';

@Component({
  selector: 'app-confirmed-trains',
  templateUrl: './confirmed-trains.component.html',
  styleUrls: ['./confirmed-trains.component.css'],
})
export class ConfirmedTrainsComponent {
  @Input() trainsList: ITrain[];
  constructor() {}
}

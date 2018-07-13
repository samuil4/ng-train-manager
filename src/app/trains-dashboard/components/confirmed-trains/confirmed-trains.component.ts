import { Component, Input } from '@angular/core';
import { Train } from '../../models/train';

@Component({
  selector: 'app-confirmed-trains',
  templateUrl: './confirmed-trains.component.html',
  styleUrls: ['./confirmed-trains.component.css'],
})
export class ConfirmedTrainsComponent {
  @Input() trainsList: Train[];
  constructor() {}
}

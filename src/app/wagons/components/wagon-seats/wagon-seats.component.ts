import {
  Component,
  OnInit,
  Input,
  SimpleChanges,
  OnChanges,
} from '@angular/core';
import { ISeat } from '@shared/models/seat.interface';

@Component({
  selector: 'app-wagon-seats',
  templateUrl: './wagon-seats.component.html',
  styleUrls: ['./wagon-seats.component.scss'],
})
export class WagonSeatsComponent implements OnInit, OnChanges {
  @Input()
  seats: ISeat[];
  columnsClass: string;
  constructor() {}

  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes.seats.currentValue) {
      const columnNumberLetters: string[] = ['A', 'B', 'C', 'D', 'E', 'F'];
      let maxColumn = 0;

      changes.seats.currentValue.forEach(element => {
        const columnNumber = element.id[element.id.length - 1];
        if (columnNumberLetters.indexOf(columnNumber) > maxColumn) {
          maxColumn = columnNumberLetters.indexOf(columnNumber);
        }
      });

      this.columnsClass = `col seat span-${(12 / (maxColumn + 1)).toFixed(0)}`;
    }
  }
}

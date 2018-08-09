import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { ISeat } from '@shared/models/seat.interface';

@Component({
  selector: 'app-wagon-seats',
  templateUrl: './wagon-seats.component.html',
  styleUrls: ['./wagon-seats.component.scss'],
})
export class WagonSeatsComponent implements OnInit {
  @Input()
  seats: ISeat[];
  columnsClass: string;
  constructor() {}

  ngOnInit() {}

  ngOnchanges(changes: SimpleChanges) {
    if (changes.seats.currentValue) {
      const columnNumberLetters: string[] = ['A', 'B', 'C', 'D', 'E', 'F'];
      let maxColumn = 0;

      changes.seats.currentValue.forEach(element => {
        const columnNumber = element.id[element.id.length - 1];
        if (columnNumberLetters.indexOf(columnNumber) > maxColumn) {
          maxColumn = columnNumberLetters.indexOf(columnNumber);
        }
      });

      this.columnsClass = `col seat span-${maxColumn}`;
    }
  }
}

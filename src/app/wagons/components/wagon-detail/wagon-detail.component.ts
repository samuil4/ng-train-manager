import {
  Component,
  Input,
  OnChanges,
  SimpleChanges,
  Output,
  EventEmitter,
} from '@angular/core';
import { IWagon } from '@shared/models/wagon.interface';
import { WagonService } from '@shared/services/wagon.service';

@Component({
  selector: 'app-wagon-detail',
  templateUrl: './wagon-detail.component.html',
  styleUrls: ['./wagon-detail.component.css'],
})
export class WagonDetailComponent implements OnChanges {
  @Input() wagon: IWagon;
  @Output() delete: EventEmitter<IWagon> = new EventEmitter();
  @Output() view: EventEmitter<IWagon> = new EventEmitter();
  constructor(private service: WagonService) {}

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
    this.wagon = { ...changes.Wagon.currentValue };
  }

  deleteWagon() {
    this.delete.emit(this.wagon);
  }

  viewWagon(): void {
    this.view.emit(this.wagon);
  }
}

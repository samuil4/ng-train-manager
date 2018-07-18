import { Component, OnInit } from '@angular/core';
import { TrainsService } from '@shared/services/trains.service';
@Component({
  selector: 'app-view-train',
  templateUrl: './view-train.component.html',
  styleUrls: ['./view-train.component.scss'],
})
export class ViewTrainComponent implements OnInit {
  constructor(private trainsService: TrainsService) {}

  ngOnInit() {}
}

import { Component, OnInit } from '@angular/core';
import { TrainDashboardService } from '../../train-dashboard.service';
@Component({
  selector: 'app-view-all-trains',
  templateUrl: './view-all-trains.component.html',
  styleUrls: ['./view-all-trains.component.scss'],
})
export class ViewAllTrainsComponent implements OnInit {
  constructor(private trainsService: TrainDashboardService) {
    console.log(trainsService);
  }

  ngOnInit() {
    // this.trainsService.getTrains().subscribe();
  }
}

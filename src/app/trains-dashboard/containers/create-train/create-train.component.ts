import { Component } from '@angular/core';
import { Train } from '@shared/models/train';
import { Router } from '@angular/router';
import { TrainsService } from '@shared/services/trains.service';

@Component({
  selector: 'app-create-train',
  templateUrl: './create-train.component.html',
  styleUrls: ['./create-train.component.scss'],
})
export class CreateTrainComponent {
  constructor(private router: Router, private trainsService: TrainsService) {}

  async createNewTrain(event: Train) {
    console.log(event);
    await this.trainsService.addTrain(event);
    this.goBack();
  }

  goBack() {
    this.router.navigate(['trains']);
  }
}

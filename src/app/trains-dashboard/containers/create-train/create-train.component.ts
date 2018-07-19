import { Component } from '@angular/core';
import { ITrain } from '@shared/models/train.interface';
import { Router } from '@angular/router';
import { TrainsService } from '@shared/services/trains.service';
import { TrainModel } from '@shared/models/train.model';

@Component({
  selector: 'app-create-train',
  templateUrl: './create-train.component.html',
  styleUrls: ['./create-train.component.scss'],
})
export class CreateTrainComponent {
  constructor(private router: Router, private trainsService: TrainsService) {}

  async createNewTrain(event: TrainModel) {
    console.log(event);

    await this.trainsService.addTrain(event.toJSON());
    this.goBack();
  }

  goBack() {
    this.router.navigate(['trains']);
  }
}

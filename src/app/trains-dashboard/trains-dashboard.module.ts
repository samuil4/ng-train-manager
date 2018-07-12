import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrainsDashboardRoutingModule } from './trains-dashboard-routing.module';
import { ViewAllTrainsComponent } from './containers/view-all-trains/view-all-trains.component';
import { ViewTrainComponent } from './containers/view-train/view-train.component';
import { CreateTrainComponent } from './containers/create-train/create-train.component';

@NgModule({
  imports: [CommonModule, TrainsDashboardRoutingModule],
  declarations: [
    ViewAllTrainsComponent,
    ViewTrainComponent,
    CreateTrainComponent
  ]
})
export class TrainsDashboardModule {}

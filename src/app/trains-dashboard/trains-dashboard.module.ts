import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Trains Modules
import { TrainsDashboardRoutingModule } from './trains-dashboard-routing.module';
import { ViewAllTrainsComponent } from './containers/view-all-trains/view-all-trains.component';
import { ViewTrainComponent } from './containers/view-train/view-train.component';
import { CreateTrainComponent } from './containers/create-train/create-train.component';

// Shared modules
import { SharedModule } from '@shared/shared.module';
import { TrainFormComponent } from './components/train-form/train-form.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    TrainsDashboardRoutingModule,
    SharedModule,
    ReactiveFormsModule,
  ],
  declarations: [
    ViewAllTrainsComponent,
    ViewTrainComponent,
    CreateTrainComponent,
    TrainFormComponent,
  ],
})
export class TrainsDashboardModule {}

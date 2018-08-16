import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgDatepickerModule } from 'ng2-datepicker';

// Trains Modules
import { TrainsDashboardRoutingModule } from './trains-dashboard-routing.module';

// Train components
import { ViewAllTrainsComponent } from './containers/view-all-trains/view-all-trains.component';
import { ViewTrainComponent } from './containers/view-train/view-train.component';
import { CreateTrainComponent } from './containers/create-train/create-train.component';
import { TrainDetailComponent } from './components/train-detail/train-detail.component';

// Shared modules
import { SharedModule } from '@shared/shared.module';
import { TrainFormComponent } from './components/train-form/train-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgSqUiModule } from '@sq-ui/ng-sq-ui';

@NgModule({
  imports: [
    CommonModule,
    TrainsDashboardRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    NgDatepickerModule,
    NgSqUiModule,
  ],
  declarations: [
    ViewAllTrainsComponent,
    ViewTrainComponent,
    CreateTrainComponent,
    TrainFormComponent,
    TrainDetailComponent,
  ],
})
export class TrainsDashboardModule {}

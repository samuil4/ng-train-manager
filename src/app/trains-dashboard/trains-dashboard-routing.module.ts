import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewAllTrainsComponent } from './containers/view-all-trains/view-all-trains.component';
import { ViewTrainComponent } from './containers/view-train/view-train.component';
import { CreateTrainComponent } from './containers/create-train/create-train.component';

const routes: Routes = [
  {
    path: '',
    component: ViewAllTrainsComponent
  },
  {
    path: 'create',
    component: CreateTrainComponent
  },
  {
    path: ':id',
    component: ViewTrainComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TrainsDashboardRoutingModule {}

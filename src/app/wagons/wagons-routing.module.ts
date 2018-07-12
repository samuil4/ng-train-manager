import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateWagonComponent } from './containers/create-wagon/create-wagon.component';
import { ViewWagonComponent } from './containers/view-wagon/view-wagon.component';
import { ViewAllWagonsComponent } from './containers/view-all-wagons/view-all-wagons.component';

const routes: Routes = [
  {
    path: '',
    component: ViewAllWagonsComponent
  },
  {
    path: 'create',
    component: CreateWagonComponent
  },
  {
    path: ':id',
    component: ViewWagonComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WagonsRoutingModule {}

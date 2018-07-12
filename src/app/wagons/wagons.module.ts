import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WagonsRoutingModule } from './wagons-routing.module';
import { CreateWagonComponent } from './containers/create-wagon/create-wagon.component';
import { ViewWagonComponent } from './containers/view-wagon/view-wagon.component';
import { ViewAllWagonsComponent } from './containers/view-all-wagons/view-all-wagons.component';

@NgModule({
  imports: [CommonModule, WagonsRoutingModule],
  declarations: [
    CreateWagonComponent,
    ViewWagonComponent,
    ViewAllWagonsComponent
  ]
})
export class WagonsModule {}

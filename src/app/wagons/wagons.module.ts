import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WagonsRoutingModule } from './wagons-routing.module';
import { CreateWagonComponent } from './containers/create-wagon/create-wagon.component';
import { ViewWagonComponent } from './containers/view-wagon/view-wagon.component';
import { ViewAllWagonsComponent } from './containers/view-all-wagons/view-all-wagons.component';
import { WagonDetailComponent } from './components/wagon-detail/wagon-detail.component';
import { WagonFormComponent } from './components/wagon-form/wagon-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { WagonSeatsComponent } from './components/wagon-seats/wagon-seats.component';

@NgModule({
  imports: [CommonModule, WagonsRoutingModule, ReactiveFormsModule],
  declarations: [
    CreateWagonComponent,
    ViewWagonComponent,
    ViewAllWagonsComponent,
    WagonDetailComponent,
    WagonFormComponent,
    WagonSeatsComponent,
  ],
})
export class WagonsModule {}

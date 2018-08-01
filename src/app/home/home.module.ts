import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './containers/home/home.component';
import { ClockWidgetModule } from 'clock-widget';

@NgModule({
  imports: [CommonModule, HomeRoutingModule, ClockWidgetModule],
  declarations: [HomeComponent],
})
export class HomeModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './containers/home/home.component';
import { ClockWidgetModule } from 'clock-widget';
import { TestLibraryModule } from 'test-library';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    ClockWidgetModule,
    TestLibraryModule,
  ],
  declarations: [HomeComponent],
})
export class HomeModule {}

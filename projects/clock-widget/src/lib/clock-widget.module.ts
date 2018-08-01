import { NgModule } from '@angular/core';
import { ClockWidgetComponent } from './clock-widget.component';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [CommonModule],
  declarations: [ClockWidgetComponent],
  exports: [ClockWidgetComponent],
})
export class ClockWidgetModule {}

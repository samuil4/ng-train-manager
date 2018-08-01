import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Observable, interval, Subscription } from 'rxjs';
import { map, share } from 'rxjs/operators';

@Component({
  selector: 'lib-clock-widget',
  template: `
    <div class="widget-clock">
      <div class="digital">
        <span class="time">{{ time | date: format }}</span>
      </div>
    </div>
  `,
  styles: [
    `
      .widget-clock .digital {
        text-align: center;
      }
      .widget-clock .time {
        font-family: 'Syncopate', sans-serif;
        font-size: 2.5em;
        margin: 0;
      }
    `,
  ],
})
export class ClockWidgetComponent implements OnInit, OnDestroy {
  @Input() format = 'hh:mm:ss a';
  public time: Date = new Date();
  private clockObservable: Observable<Date>;
  private subscription: Subscription;

  constructor() {}

  ngOnInit() {
    this.clockObservable = interval(1000).pipe(
      map((tick) => {
        return new Date();
      }),
      share(),
    );

    this.subscription = this.clockObservable.subscribe((time) => {
      this.time = time;
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}

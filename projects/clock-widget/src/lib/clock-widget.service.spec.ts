import { TestBed, inject } from '@angular/core/testing';

import { ClockWidgetService } from './clock-widget.service';

describe('ClockWidgetService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ClockWidgetService]
    });
  });

  it('should be created', inject([ClockWidgetService], (service: ClockWidgetService) => {
    expect(service).toBeTruthy();
  }));
});

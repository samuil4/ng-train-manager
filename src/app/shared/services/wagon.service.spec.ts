import { TestBed, inject } from '@angular/core/testing';

import { WagonService } from './wagon.service';

describe('WagonService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WagonService]
    });
  });

  it('should be created', inject([WagonService], (service: WagonService) => {
    expect(service).toBeTruthy();
  }));
});

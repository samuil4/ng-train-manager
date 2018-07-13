import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmedTrainsComponent } from './confirmed-trains.component';

describe('ConfirmedTrainsComponent', () => {
  let component: ConfirmedTrainsComponent;
  let fixture: ComponentFixture<ConfirmedTrainsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfirmedTrainsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmedTrainsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

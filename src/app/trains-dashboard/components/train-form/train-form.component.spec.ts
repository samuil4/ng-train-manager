import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainFormComponent } from './train-form.component';

describe('TrainFormComponent', () => {
  let component: TrainFormComponent;
  let fixture: ComponentFixture<TrainFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrainFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

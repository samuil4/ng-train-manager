import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WagonDetailComponent } from './wagon-detail.component';

describe('WagonDetailComponent', () => {
  let component: WagonDetailComponent;
  let fixture: ComponentFixture<WagonDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WagonDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WagonDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

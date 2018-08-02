import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WagonFormComponent } from './wagon-form.component';

describe('WagonFormComponent', () => {
  let component: WagonFormComponent;
  let fixture: ComponentFixture<WagonFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WagonFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WagonFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

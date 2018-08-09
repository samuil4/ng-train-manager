import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SharedModule } from '../../../shared/shared.module';
import { LoginComponent } from './login.component';
import { AuthService } from '../../../shared/services/auth/auth.service';
import { AngularFireAuth } from 'angularfire2/auth';
import { RouterTestingModule } from '@angular/router/testing';
import { FormGroup, FormControl } from '@angular/forms';
import { Store } from '@store';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let authService: AuthService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [SharedModule, RouterTestingModule],
      providers: [{ provide: AuthService }],
    }).compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;

    authService = TestBed.get(AuthService);
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show an error message for wrong credentials', async(() => {
    fixture.detectChanges();
    const form = new FormGroup({
      email: new FormControl('test@test.com'),
      password: new FormControl('123'),
    });
    component.initiateLogin(form);
    expect(component.errorMessage).toBe('4');
  }));
});

import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { AppHeaderComponent } from './components/app-header/app-header.component';
import { AppFooterComponent } from './components/app-footer/app-footer.component';
import { RouterTestingModule } from '@angular/router/testing';
import { FullLayoutComponent } from './containers/full-layout/full-layout.component';
import { SimpleLayoutComponent } from './containers/simple-layout/simple-layout.component';
import { AppNavComponent } from './components/app-nav/app-nav.component';
import { APP_BASE_HREF } from '@angular/common';
import { Store } from '@store';
import { AngularFireAuth } from 'angularfire2/auth';
import { AuthModule } from './auth/auth.module';
import { AuthService } from './auth/shared/services/auth/auth.service';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        AppHeaderComponent,
        AppFooterComponent,
        FullLayoutComponent,
        SimpleLayoutComponent,
        AppNavComponent,
      ],
      imports: [RouterTestingModule, AuthModule],
      providers: [
        { provide: APP_BASE_HREF, useValue: '/' },
        Store,
        { provide: AuthService },
        { provide: AngularFireAuth },
      ],
    }).compileComponents();
  }));
  it('#Appcomnent should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});

import { BrowserModule } from '@angular/platform-browser';
import {
  NgModule,
  LOCALE_ID,
  CUSTOM_ELEMENTS_SCHEMA,
  NO_ERRORS_SCHEMA,
} from '@angular/core';
import { registerLocaleData } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { FullLayoutComponent } from './containers/full-layout/full-layout.component';
import { SimpleLayoutComponent } from './containers/simple-layout/simple-layout.component';
import { AppHeaderComponent } from './components/app-header/app-header.component';
import { AppFooterComponent } from './components/app-footer/app-footer.component';
import { Store } from '@store';

import { AuthModule } from './auth/auth.module';
import { NotFoundModule } from './not-found/not-found.module';
import { AppNavComponent } from './components/app-nav/app-nav.component';
import { NgSqUiModule } from '@sq-ui/ng-sq-ui';

const localeTranslationsEn = {
  welcome: 'Welcome friend!',
};

registerLocaleData(localeTranslationsEn, 'en');

@NgModule({
  declarations: [
    AppComponent,
    FullLayoutComponent,
    SimpleLayoutComponent,
    AppHeaderComponent,
    AppFooterComponent,
    AppNavComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    NotFoundModule,
    NgSqUiModule,
  ],
  providers: [Store, { provide: LOCALE_ID, useValue: 'en' }],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
})
export class AppModule {}

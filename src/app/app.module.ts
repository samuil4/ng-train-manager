import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
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
  imports: [BrowserModule, AppRoutingModule, AuthModule, NotFoundModule],
  providers: [Store, { provide: LOCALE_ID, useValue: 'en' }],
  bootstrap: [AppComponent],
})
export class AppModule {}

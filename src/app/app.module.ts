import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { FullLayoutComponent } from './containers/full-layout/full-layout.component';
import { SimpleLayoutComponent } from './containers/simple-layout/simple-layout.component';
import { AppHeaderComponent } from './components/app-header/app-header.component';
import { AppFooterComponent } from './components/app-footer/app-footer.component';

import { AuthModule } from './auth/auth.module';
import { NotFoundModule } from './not-found/not-found.module';

@NgModule({
  declarations: [
    AppComponent,
    FullLayoutComponent,
    SimpleLayoutComponent,
    AppHeaderComponent,
    AppFooterComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, AuthModule, NotFoundModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

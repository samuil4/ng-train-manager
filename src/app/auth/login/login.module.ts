import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './containers/login/login.component';
import { SharedModule } from '@app/auth-shared/shared.module';

const ROUTES: Routes = [
  {
    path: '',
    component: LoginComponent,
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(ROUTES), SharedModule],
  declarations: [LoginComponent],
})
export class LoginModule {}

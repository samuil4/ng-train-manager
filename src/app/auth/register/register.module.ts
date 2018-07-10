import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { SharedModule } from '../shared/shared.module';
import { RegisterComponent } from './containers/register/register.component';

const ROUTES: Routes = [
  {
    path: '',
    component: RegisterComponent,
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(ROUTES), SharedModule],
  declarations: [RegisterComponent],
})
export class RegisterModule {}

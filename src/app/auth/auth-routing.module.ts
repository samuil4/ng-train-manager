import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SimpleLayoutComponent } from '../containers/simple-layout/simple-layout.component';
import { LoggedInGuard } from '@app/auth-shared/guards/logged-in.guard';

export const ROUTES: Routes = [
  {
    path: 'auth',
    component: SimpleLayoutComponent,
    canActivate: [LoggedInGuard],
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'login',
      },
      {
        path: 'login',
        loadChildren: './login/login.module#LoginModule',
      },
      {
        path: 'register',
        loadChildren: './register/register.module#RegisterModule',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}

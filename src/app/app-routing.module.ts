import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { FullLayoutComponent } from './containers/full-layout/full-layout.component';

// Guards
import { AuthGuard } from '@app/auth-shared/guards/auth.guard';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  // Example implementing different layout for a given module
  {
    path: 'home',
    component: FullLayoutComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        canActivate: [AuthGuard],
        loadChildren: './home/home.module#HomeModule',
      },
    ],
  },
  {
    path: 'trains',
    canActivate: [AuthGuard],
    component: FullLayoutComponent,
    loadChildren:
      './trains-dashboard/trains-dashboard.module#TrainsDashboardModule',
  },
  {
    path: 'wagons',
    canActivate: [AuthGuard],
    component: FullLayoutComponent,
    loadChildren: './wagons/wagons.module#WagonsModule',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [],
})
export class AppRoutingModule {}

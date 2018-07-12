import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotFoundComponent } from './containers/not-found/not-found.component';
import { SimpleLayoutComponent } from '../containers/simple-layout/simple-layout.component';

const routes: Routes = [
  {
    path: '404',
    component: SimpleLayoutComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: NotFoundComponent,
      },
    ],
  },

  {
    path: '**',
    redirectTo: '/404',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NotFoundRoutingModule {}

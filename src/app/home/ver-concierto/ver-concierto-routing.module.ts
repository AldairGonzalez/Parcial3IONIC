import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VerConciertoPage } from './ver-concierto.page';

const routes: Routes = [
  {
    path: '',
    component: VerConciertoPage
  },
  {
    path: 'volver',
    loadChildren: () => import('../home.module').then( m => m.HomePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VerConciertoPageRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CrearConciertoPage } from './crear-concierto.page';

const routes: Routes = [
  {
    path: '',
    component: CrearConciertoPage
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
export class CrearConciertoPageRoutingModule {}

import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    children:[
      {
        path:"",
        loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
      },
      {
        path: ":conciertoId",
        loadChildren: () => import('./home/ver-concierto/ver-concierto.module').then( m => m.VerConciertoPageModule)
      }
    ]
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

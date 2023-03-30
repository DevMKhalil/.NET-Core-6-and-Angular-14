import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('../home/home.component').then(mod => mod.HomeComponent),
    pathMatch: 'full'
  },
  {
    path: 'fetch-data',
    loadComponent: () => import('../fetch-data/fetch-data.component').then(mod => mod.FetchDataComponent)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

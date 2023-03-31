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
  },
  {
    path: 'health-check',
    loadComponent: () => import('../health-check/health-check.component').then(mod => mod.HealthCheckComponent)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

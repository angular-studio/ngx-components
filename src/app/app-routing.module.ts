import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'pages',
    loadChildren: './pages/layout-page/layout-page.module#LayoutPageModule'
  },
  {
    path: '',
    redirectTo: '/pages',
    pathMatch: 'full'
  },
  {
    path: '**',
    loadChildren: './pages/not-found/not-found.module#NotFoundModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

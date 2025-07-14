import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'viewer/view/1',
    loadChildren: () => import('./document/document.module').then((m) => m.DocumentModule),
  },
  {
    path: '',
    redirectTo: 'viewer/view/1',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: 'viewer/view/1',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled',
  })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
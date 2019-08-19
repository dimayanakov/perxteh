import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingLayoutComponent } from './layouts/landing-layout.component';
import { LandingComponent } from './landing/landing.component';
import { MainLayoutComponent } from './layouts/main-layout.component';

const routes: Routes = [
  {
    path: '',
    component: LandingLayoutComponent,
    children: [
      { path: '', component: LandingComponent }
    ]
  },
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      { path: 'table', loadChildren: () => import('./table/table.module').then(m => m.TableModule) },
      { path: 'directive', loadChildren: () => import('./directive/directive.module').then(m => m.DirectiveModule) }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

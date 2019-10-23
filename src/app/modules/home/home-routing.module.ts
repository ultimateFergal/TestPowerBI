import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component';
import { WelcomeComponent } from './components/welcome/welcome.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        component: WelcomeComponent,
      }, /*
      {
        path: 'products',
        data: {
          breadcrumb: 'breadcrumb.products'
        },
        loadChildren: '../products/products.module#ProductsModule'
      },
      {
        path: 'products-group',
        data: {
          breadcrumb: 'breadcrumb.products'
        },
        loadChildren: '../products-group-management/products-group-management.module#ProductsGroupManagementModule'
      }, */
      {
        path: '**',
        redirectTo: '',
        pathMatch: 'full'
      }

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }

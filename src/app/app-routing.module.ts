import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MsalGuard } from '@azure/msal-angular';

import { AppComponent } from './app.component';



const routes: Routes = [
  // { path: '', component: AppComponent },
  // { path: 'home', loadChildren: './modules/home/home.module#HomeModule' },
  { path: '', loadChildren: () => import('./modules/authentication/authentication.module').then(m => m.AuthenticationModule)},
  // { path: 'home', loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule)},
  { path: 'home', loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule), canActivate : [MsalGuard] },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

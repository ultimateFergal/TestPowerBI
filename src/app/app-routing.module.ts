import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';


const routes: Routes = [
  { path: '', component: AppComponent },
  // { path: 'home', loadChildren: './modules/home/home.module#HomeModule' },
  { path: 'home', loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule)},
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

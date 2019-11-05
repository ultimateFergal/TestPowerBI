import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// import {MsalGuard} from '@azure/msal-angular';

import { AuthenticationComponent } from './components/authentication/authentication.component';



const routes: Routes = [
  {
    path: '',
    component: AuthenticationComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthenticationRoutingModule { }

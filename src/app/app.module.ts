import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { GetReportService } from './core/services/get-report.service';
import { MsalModule } from '@azure/msal-angular';
import { MsalInterceptor} from '@azure/msal-angular';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { LandingComponent } from './components/landing/landing.component';

export function loggerCallback(logLevel, message, piiEnabled) {
  console.log('client logging' + message);
}


export const protectedResourceMap:[string, string[]][] =
[ ['https://buildtodoservice.azurewebsites.net/api/todolist',
  ['api://a88bb933-319c-41b5-9f04-eff36d985612/access_as_user']],
  ['https://graph.microsoft.com/v1.0/me', ['user.read']] ];

const isIE = window.navigator.userAgent.indexOf('MSIE ') > -1 || window.navigator.userAgent.indexOf('Trident/') > -1;

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    CoreModule,
    MsalModule.forRoot({
      clientID: '6226576d-37e9-49eb-b201-ec1eeb0029b6',
      authority: 'https://login.microsoftonline.com/common/',
      validateAuthority: true,
      redirectUri: 'http://localhost:4200/',
      cacheLocation : 'localStorage',
      storeAuthStateInCookie: isIE, // set to true for IE 11
      postLogoutRedirectUri: 'http://localhost:4200/',
      navigateToLoginRequestUrl: true,
      // popUp: !isIE,
      consentScopes: [ 'user.read', 'openid', 'profile', 'api://a88bb933-319c-41b5-9f04-eff36d985612/access_as_user'],
      unprotectedResources: ['https://www.microsoft.com/en-us/'],
      protectedResourceMap,
      logger: loggerCallback,
      correlationId: '1234',
      piiLoggingEnabled: true
    }),
  ],
  providers: [
    GetReportService,
    {provide: HTTP_INTERCEPTORS, useClass: MsalInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

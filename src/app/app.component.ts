import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { ThemeService } from './core/services/theme.service';
import { Observable, Subscription } from 'rxjs';
import { MsalService} from '@azure/msal-angular';
import { BroadcastService } from '@azure/msal-angular';
import { Router, ActivatedRoute } from '@angular/router';

export function loggerCallback(logLevel, message, piiEnabled) {
  console.log('client logging' + message);
}


export const protectedResourceMap:[string, string[]][] =
[ ['https://buildtodoservice.azurewebsites.net/api/todolist',
  ['api://a88bb933-319c-41b5-9f04-eff36d985612/access_as_user']],
  ['https://graph.microsoft.com/v1.0/me', ['user.read']] ];

const isIE = window.navigator.userAgent.indexOf('MSIE ') > -1 || window.navigator.userAgent.indexOf('Trident/') > -1;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit, OnDestroy {
  title = 'TestPowerBI';

  isDarkTheme: Observable<boolean>;

  loggedIn: boolean;
  public isIframe: boolean;
  private subscription: Subscription;

  constructor(private themeService: ThemeService,
              private broadcastService: BroadcastService,
              private authService: MsalService,
              private router: Router,
              private readonly route: ActivatedRoute ) {
    //  This is to avoid reload during acquireTokenSilent() because of hidden iframe
    this.isIframe = window !== window.parent && !window.opener;
    if (this.authService.getUser()) {
       this.loggedIn = true;
    } else {
      this.loggedIn = false;
    }
  }

  login() {
    const isIE2 = window.navigator.userAgent.indexOf('MSIE ') > -1 || window.navigator.userAgent.indexOf('Trident/') > -1;

    // if (isIE2) {
    this.authService.loginRedirect();
/*     } else {
      this.authService.loginPopup();
    } */

    this.broadcastService.subscribe('msal:loginSuccess', (payload) => {
      // do something here
      alert('hey!');
      });
  }

  logout() {
   this.authService.logout();
  }

  ngOnInit() {
    this.isDarkTheme = this.themeService.isDarkTheme;

    this.broadcastService.subscribe('msal:loginFailure', (payload) => {
      console.log('login failure ' + JSON.stringify(payload));
      this.loggedIn = false;
      alert('hey Fail');

    });

    this.broadcastService.subscribe('msal:loginSuccess', (payload) => {
      console.log('login success ' + JSON.stringify(payload));
      this.loggedIn = true;

      this.router.navigate(['/home'], { relativeTo: this.route });

    });
  }

  ngOnDestroy() {
    this.broadcastService.getMSALSubject().next(1);
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  ngAfterViewInit() {
  }
}

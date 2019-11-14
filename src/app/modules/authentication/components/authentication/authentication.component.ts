import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { BroadcastService, MsalService } from '@azure/msal-angular';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription, Observable } from 'rxjs';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.scss']
})
export class AuthenticationComponent implements OnInit, AfterViewInit, OnDestroy {

  title = 'TestPowerBI';

  isDarkTheme: Observable<boolean>;

  loggedIn: boolean;
  public isIframe: boolean;
  private subscription: Subscription;

  constructor(private broadcastService: BroadcastService,
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

  ngOnInit() {

    this.broadcastService.subscribe('msal:loginFailure', (payload) => {
      console.log('login failure ' + JSON.stringify(payload));
      this.loggedIn = false;
      alert('hey Fail');

    });

    this.broadcastService.subscribe('msal:loginSuccess', (payload) => {
      console.log('login success ' + JSON.stringify(payload));
      this.loggedIn = true;

      // this.router.navigate(['home'], { relativeTo: this.route });
      this.router.navigate(['home']);
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

  login() {

    this.authService.loginRedirect();

    this.broadcastService.subscribe('msal:loginSuccess', (payload) => {
      this.router.navigate(['/home']);
    });
  }

  logout() {
   this.authService.logout();
  }

}

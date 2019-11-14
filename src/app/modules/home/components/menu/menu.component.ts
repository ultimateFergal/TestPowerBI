import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { ThemeService } from 'src/app/core/services/theme.service';
import Swiper from 'swiper';
import { MsalService } from '@azure/msal-angular';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit, AfterViewInit {


  @ViewChild('sidenav', {static: false}) sidenav: MatSidenav;

  themeClass;
  showFiller = false;
  isDarkTheme: Observable<boolean>;
  loggedIn: boolean;

  // mySwiper = new Swiper('.swiper-container', { /* ... */ });
  mySwiper: Swiper;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver,
              private themeService: ThemeService,
              private authService: MsalService) {

  }

  ngOnInit(): void {
    this.isDarkTheme = this.themeService.isDarkTheme;
    console.log('ng oninit home components layout');

    if (this.authService.getUser()) {
      this.loggedIn = true;
   } else {
     this.loggedIn = false;
   }
  }

  toggleDarkTheme(checked: boolean) {
    this.themeService.setDarkTheme(checked);
  }

  ngAfterViewInit() {

  }

  logout() {
    this.authService.logout();
  }

}

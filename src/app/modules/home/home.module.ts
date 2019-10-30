import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { HomeRoutingModule } from './home-routing.module';
import { LayoutComponent } from './components/layout/layout.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { MenuComponent } from './components/menu/menu.component';
import { ReportDetailComponent } from './components/report-detail/report-detail.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';



@NgModule({
  declarations: [LayoutComponent, WelcomeComponent, MenuComponent, ReportDetailComponent, DashboardComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
  ],
})
export class HomeModule { }

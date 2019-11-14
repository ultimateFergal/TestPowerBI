import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { ReportDetailComponent } from './components/report-detail/report-detail.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        component: DashboardComponent,
      },
      {
        path: 'report-detail',
        component: ReportDetailComponent
      },
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

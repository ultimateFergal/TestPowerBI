import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { GetReportService } from './services/get-report.service';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    GetReportService,
  ]
})
export class CoreModule { }

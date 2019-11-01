import { Component, OnInit, AfterViewInit } from '@angular/core';
import Swiper from 'swiper';
import { models } from 'powerbi-client';
import * as powerbi from 'powerbi-client';

import { GetReportService } from 'src/app/core/services/get-report.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, AfterViewInit {

  pbidata;
  embedToken;
  mySwiper: Swiper;
  constructor(private getReportService: GetReportService) { }

  ngOnInit() {
    this.getReportService.getEmbededUrlReport().subscribe(
      (data: any) => {
        console.log( data , 'data service fdo');
        this.pbidata = data.data.pbi;
        this.embedToken = data.embedToken;
        console.log(this.pbidata, 'this.config fdo');
        console.log( this.embedToken , 'data service fdo');

        const mySwiper = new Swiper('.swiper-container', {
          slidesPerView: 3,
          spaceBetween: 30,
          grabCursor: true,
          pagination: {
            el: '.swiper-pagination',
            clickable: true,
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
        });
      }
    );
  }

  ngAfterViewInit() {

  }

}

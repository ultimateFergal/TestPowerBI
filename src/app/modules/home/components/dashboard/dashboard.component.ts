import { Component, OnInit, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
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

  @ViewChild('sliderFdo', {static: true}) sliderFdo: ElementRef;
  @ViewChild('sliderFdo1', {static: true}) sliderFdo1: ElementRef;
  @ViewChild('sliderFdo2', {static: true}) sliderFdo2: ElementRef;

  // public sliderFdo: HTMLElement;

  constructor(private getReportService: GetReportService) {
    // this.sliderFdo = (document.getElementById('sliderFdo')) as HTMLElement;
  }

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
    // const slider = document.querySelector('.items');
    let slider: HTMLElement;
    let slider1: HTMLElement;
    let isDown = false;
    let startX;
    let scrollLeft;

    slider = this.sliderFdo.nativeElement;
    slider1 = this.sliderFdo1.nativeElement;

    // console.log(slider, 'slider fdo');
    slider.addEventListener('mousedown', (e) => {
      isDown = true;
      slider.classList.add('active');

      startX = e.pageX - slider.offsetLeft;

      scrollLeft = slider.scrollLeft;
    });

    slider.addEventListener('mouseleave', () => {
      isDown = false;
      slider.classList.remove('active');
    });

    slider.addEventListener('mouseup', () => {
      isDown = false;
      slider.classList.remove('active');
    });

    slider.addEventListener('mousemove', (e) => {
      if (!isDown) { return; } // stop the function from running

      e.preventDefault();
      const x = e.pageX - slider.offsetLeft;

      const walk = (x - startX) * 3;

      slider.scrollLeft = scrollLeft - walk;
    });

        // console.log(slider1, 'slider1 fdo');
    slider1.addEventListener('mousedown', (e) => {
      isDown = true;
      slider1.classList.add('active');

      startX = e.pageX - slider1.offsetLeft;

      scrollLeft = slider1.scrollLeft;
    });

    slider1.addEventListener('mouseleave', () => {
      isDown = false;
      slider1.classList.remove('active');
    });

    slider1.addEventListener('mouseup', () => {
      isDown = false;
      slider1.classList.remove('active');
    });

    slider1.addEventListener('mousemove', (e) => {
      if (!isDown) { return; } // stop the function from running

      e.preventDefault();
      const x = e.pageX - slider1.offsetLeft;

      const walk = (x - startX) * 3;

      slider1.scrollLeft = scrollLeft - walk;
    });
  }

  swipLeft(e) {
    let slider: HTMLElement;
    let slider1: HTMLElement;
    let slider2: HTMLElement;
    let isDown = false;
    let startX;
    let scrollLeft;

    slider = this.sliderFdo.nativeElement;
    slider1 = this.sliderFdo1.nativeElement;
    slider2 = this.sliderFdo2.nativeElement;

    isDown = true;
    slider.classList.add('active');

    startX = e.pageX - slider.offsetLeft;

    scrollLeft = slider.scrollLeft;

    if (!isDown) { return; } // stop the function from running

    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;

    const walk = (x - startX) * 3;

    slider.scrollLeft = scrollLeft - walk;
  }



}

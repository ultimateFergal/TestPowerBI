import { Component, OnInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { models } from 'powerbi-client';
import * as powerbi from 'powerbi-client';

import { GetReportService } from 'src/app/core/services/get-report.service';

@Component({
  selector: 'app-report-detail',
  templateUrl: './report-detail.component.html',
  styleUrls: ['./report-detail.component.scss']
})
export class ReportDetailComponent implements OnInit, OnDestroy {

  @ViewChild('reportContainer1', {static: true}) reportContainer1: ElementRef;

  sub;
  reporId;

   // Get a reference to the embedded report HTML element
   public reportContainer: HTMLElement;

   // Embed the report and display it within the div container.
   public pbiService = window.powerbi as powerbi.service.Service;
   public report;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private getReportService: GetReportService
    ) {
      this.reportContainer = (document.getElementById('PowerBIQNA')) as HTMLElement;
     }

  ngOnInit() {
    this.sub = this.route
    .queryParams
    .subscribe(params => {
      this.reporId = params.id;
      console.log('Query param page: ', this.reporId);

      this.getReportService.getEmbededUrlReport().subscribe(
        (data: any) => {
          console.log( data , 'data service fdo detail');

          const config: any = {
            type: data.data.pbi[2].objectType,
            tokenType: models.TokenType.Aad,
            accessToken: data.embedToken,
            embedUrl: data.data.pbi[2].embedUrl,
            id: data.data.pbi[2].reporId,
            permissions: models.Permissions.Read,
            pageName: data.data.pbi[2].pageName,
            visualName: data.data.pbi[2].visualName,
            settings: {
                filterPaneEnabled: false,
                navContentPaneEnabled: false
            }
          };

          
          // Get a reference to the embedded report HTML element
          // this.reportContainer = (document.getElementById('PowerBIQNA')) as HTMLElement;
          this.reportContainer = this.reportContainer1.nativeElement;
          this.report = this.pbiService.embed(this.reportContainer, config);

          console.log(this.report, 'response report');
          console.log(this.reportContainer, 'this.reportContainer');
          // console.log( this.report.loaded, 'report loaded');


                  // Report.on will add an event handler which prints to Log window.
/*           this.report.on('loaded', function() {
            console.log('Loaded fdo');
          
            this.report.getPages()
            .then(function (pages) {
              // Retrieve first page.
              let firstPage = pages[0];

              console.log(pages, 'pages fdo');

              firstPage.getVisuals()
                .then(function (visuals) {
                  console.log(visuals, 'visuals fdo');
                });
            });
            
          }); */




        });

    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}

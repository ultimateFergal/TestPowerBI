import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import { models } from 'powerbi-client';
import * as powerbi from 'powerbi-client';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {
  title = 'powerBITest Angular material added';
  public screenHeight: number;
  @ViewChild('reportContainer1', {static: true}) reportContainer1: ElementRef;
  @Input() configExternal: any;
  @Input() embedToken: any;

  config;


   // Get a reference to the embedded report HTML element
   public reportContainer: HTMLElement;

   // Embed the report and display it within the div container.
   public pbiService = window.powerbi as powerbi.service.Service;
   public report;

  constructor(
    private router: Router,
    private readonly route: ActivatedRoute
    ) {
      this.reportContainer = (document.getElementById('PowerBIQNA')) as HTMLElement;
    }

  ngOnInit() {

    this.config = {
      type: 'report',
      tokenType: models.TokenType.Embed,
      accessToken: '',
      embedUrl: '',
      id: '',
      permissions: models.Permissions.Read,
      pagename: '',
      visualName: '',
      settings: {
          filterPaneEnabled: false,
          navContentPaneEnabled: false
      }
    };

    this.config.type = this.configExternal.objectType;
    this.config.tokenType = models.TokenType.Aad;
    this.config.accessToken = this.embedToken;
    this.config.embedUrl = this.configExternal.embedUrl;
    this.config.id = this.configExternal.reportId;
    this.config.pageName = this.configExternal.pageName;
    this.config.visualName = this.configExternal.visualName;

    // Get a reference to the embedded report HTML element
    this.reportContainer = (document.getElementById('PowerBIQNA')) as HTMLElement;
    this.reportContainer = this.reportContainer1.nativeElement;
    this.report = this.pbiService.embed(this.reportContainer, this.config);

    console.log(  this.config, 'this.config yimi dashboard');

    // console.log(this.report, 'response report');
    // console.log(this.reportContainer, 'this.reportContainer');
    // console.log( this.report.loaded, 'report loaded');



    // Report.on will add an event handler which prints to Log window.
    this.report.on('loaded', function() {
      console.log('Loaded fdo');
    });

    this.report.on('error', function (event) {
      console.log(event.detail, 'error fdo');

      this.report.off('error');
    });


    // console.log(this.config, 'this.config');

    // console.log(this.reportContainer, 'this.reportContainer');
  }

  getInfoRedirect() {
    // this.router.navigate(['report-detail'], { relativeTo: this.route });
    this.router.navigate(['report-detail'], { queryParams: { id: this.config.id }, relativeTo: this.route });
  }

}

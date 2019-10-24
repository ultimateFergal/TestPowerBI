import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { models } from 'powerbi-client';
import * as powerbi from 'powerbi-client';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {
  title = 'powerBITest Angular material added';
  public screenHeight: number;
 @ViewChild('reportContainer1', {static: true}) reportContainer1: ElementRef;

   // Read embed application token from Model
   // tslint:disable-next-line: max-line-length
   public accessToken = 'H4sIAAAAAAAEACWWxQ7sWBJE_-Vt3ZKZWuqFucyMO7PLzDSaf58a9f4u4kZGnsj__LHSp5_S4s_ff5Tt7F-Ypjw2y4E11zt0sZcVpnrn_b7FSMuHYHcABvrq47ECUyLhaquIZQiaJ37YeW-1ORvyq1twOEzUFWt1cHXt_q1Zf1isdC-jBo8TC4FBJiIqjy3ZneGMjRtJaI7oV8xmiiiel1uXobArKcvK7dkNFWXC9q2Efpzb81xkqQxTmrQ-5B7xIdOlg8aeZsVUWKMnnTXQDGhmSfQon-xqcrI9e7MaDhC9EvIOhHPvTkCBXtjBGJreMRQTKkETPT1RPhYVPSciY96IkycWIg09eZD7hTu-vpG0JV_LBJsvO8oAiMr05n43JUnnaPS_RaxSdkZK0C5mdfch-j06xfysfJsutQ0JgwCb1_EpmicZbo1mOLcj-UFSBjdC80YJmKYHCSN3q8ml2AMjmvplznw6YeR1zqXbqWh6ZqmUXn3n8zrXa8hfpWh3TRY5VfEGhiE5GCDdWy7LzLzse3xCSn_Sj0W7NIDcHYLMeGZ0eET4AucGIo5mJtQnIFe36ltTkorf0L3xQPKhH6_VWVyHfCDhEvL4sKGhcB2mCSIrAorDJc0tNG51GugFZrcN1IwHoVbVxwRSrEIgG0BKPagIoCGHbCHzKYdIhYcVEhQ5hWgSZfzC55GkBTpQ4RUQBV7u26kKtanLFx5yDvXV-MIWrJFSonJ0tKQrxlF2oAywh4m6Zo9LaRW_lTq-Ny4ibvR-arR0ytPbkOvoJvIZ3mZBEhCugQacR94qQkaMP_fjiiy9OypB6wdmAAs7OmopVMnAMVQGnmWllxD0CSw_dGAXHqPbaSfxI9aFlnIAgqMT5Jz-m7RsGh5sabSb_ZbEHWcrCEIyXKh8fuTxPPug5ARW-GpjT3XbhKIwW7ff5FDB9hZN8dWmuY--vPjBdmGz9A_Zf9wkBy-DozdHLP3o4RKgRzjnIl0QY8b5s5Lrx-GI7BQ33FvnpP8sfATflqvf6muhRaThcQv-9MoRS3VHuBoSHMFRe12MqZnwcQNYHxXk_Q1PPb2e_SxsEpLq04WyjJCvAObnCgfNrmhUssXxS5KrEbKlqfvoA3CEbW1Kz3CcjieZ5Nl1Jgw4RNDal8rPNAV1lHqihpHT1MaD6sU_AeeUchZm1GnGJZ0mCg_I307ATznVXvM5BwG_rrwd9nJJNdP2w9TZ051QGA4r4ONDk-Xi3j5ZGTyG7ExKY0c6USK9RK7AgWmzHvUIXvV1m16xXZ1BaswiE1zyZSqPYNZptzryaUsd4tZBoBX4cvGq_Tb1SHFTVFx5xLIBiwBfb4dzt66jYhSDkm3hMIdsWhO55ZRFkMdSZcBsj8qWeKsjBIkvRp-5JBQbZkm3yrEJhn04sCCRX3K6lOKSzayFle8B7KfvW-7vxhtXOeqsgQuAvqWJWxI5U6tEfkcqzb-xY-Nqoxx-P2q0Fb_IHho0aCH3OhuA31kHElswlwo-gaZUsHm1fYoS_dONoi9YaAiANVjGjWMaziqaIIxF33oEUVPE3fzO-599HiKfdI2CbfUdR26OR4c0M64KsWSPViof45mcQ9KAj2QXV4Fwb5pJZRqow45-RmsDYnoIFx7rZANAu0gd6UKvLnEj8LeYAgblruPpK0jGc2w4ppMPJWNzNAAQ9EoRZre-2HUF82UAQQoxZvUv09H3JWSWcflIIc9lH6vUICBh34oJPFcSE0z-IaoYQgnb_SFuvKAc5kCrthFGsuog-G8pBUCaC7ayWXtRvQCsoewcWd4sCwGYhs0P7JzBEqhG3R_cJ7D750PTWSE4SFsSAp6sPDlq1pYLIawx8ns1YAHx_J9Ws-f3PTtXVgK7hWc6NIylvVPBRXXZR-AyYAVULjvkT6mNmctVcrEL1-6si6cQDGEi_mlhQe9WB-dAc3wVcVRJGutMoPxsgYrcVfe1I72z4BgllFIWgJtnQTES2ewH8sLdj_K-Vmb9au5Q1w24KPhlnR_eF7HxZb_j_uGPkh8XsIOqxEQIIiNaft-r3vF-3xtj4anSH47iHYwrB-H9_jEF2rSTper8CgiD40a_3H61XKGyPIkOtWjgZugL-6dZfvR72IpJiDVZJPwXCAc8mf1QK97KqyNHQ0fBZd4fyysfShlP2c3JkEqItUsfmCBCY4Gz4tVQxNx0XB56qEQxHVR0MnMlA7CQcfAcJgQvzgVLyxjOWneixQXzcwsnGmp07Mia7wcboEzwNrwXeUupq746qeiSyW4CeRttP4To9FuKOn6NuPpDmKbof1PDYT0u_zwby192oFcWCKUZvJjqQTShqiXj-HEsjLz--efPX3-49Zn3SS2f35lT5cVDXqCGp-nSv82mmVJq7AMLn2YKFQ5KG5n0da3slmcdk3-NxMN-Qf96Ppgwy2GHz6aa7LdxAbH-Iq5KLhLtBYuYmm4eqfwr7EqxoKzZ44opV_E6JGd2_qDedkBEuL5gi6wC1uUUlsUbC3pyzWhi_AK87NDK0LeoZpdLox7JWl0nXzUAmGLXfCBado95nO5xfJy7cOuv8kqMtX9HkshKc66_pZVKbGS4pUO970QoD3pMcHJ4DsAnfS4u4HOtW9kHJtR6MbgH4hcjxhRKXxO36Aw-aE3P1kzZDCY0P20VFijGTHWSi4Boygcth7pE-r7LRFm0xLqx2v4GNJA6k4jO6UD9r83P3JSrHPxc3jF70RkY-9qIZKug-TrUof07DPdbj-l-rOXvmfGmLhdgmsyOm2LaDq09FmXSqoitkG5WS4gCrbjYdUPu4WeCAVPGHkf1p5JCdMCr82W6w8S8K_P97ZwbAtzCne9OkDM4iDJ5v-PBESfk-eineNTcRM3dMbQHcpoIatrnd1OEljd50U2bP5wroTZ1eAy0ICBaq7x8Jkm5ihcoDDssgRg8d4SJYmWWlYVig8WfirWYDqXDPJQYzpNBIx70kyHhddXGF8fkzbajd0bVR1SMWnaHoEVROLRPX_CGepDhpqxXh110gyxZ6GsfUf_MU5d8T8vy593TQMLcW4zNbo9OdTmA0EWceW31AmdosDXSE_nXXWMuohtXUMDllqihAbTB_Gz-7_8AL4f_XdoLAAA=';
   // Read embed URL from Model
   // tslint:disable-next-line: max-line-length
   public embedUrl = 'https://app.powerbi.com/reportEmbed?reportId=f6bfd646-b718-44dc-a378-b73e6b528204&groupId=be8908da-da25-452e-b220-163f52476cdd&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLVVTLU5PUlRILUNFTlRSQUwtcmVkaXJlY3QuYW5hbHlzaXMud2luZG93cy5uZXQifQ%3d%3d';

   // Read report Id from Model
   public embedReportId = 'f6bfd646-b718-44dc-a378-b73e6b528204';


   // Get models. models contains enums that can be used.
   // public models = window['powerbi-client'].models;


   // Embed configuration used to describe what and how to embed.
   // This object is used when calling powerbi.embed.
   // This also includes settings and options such as filters.
   // You can find more information at https://github.com/Microsoft/PowerBI-JavaScript/wiki/Embed-Configuration-Details.
   public config: any = {
       type: 'report',
       tokenType: models.TokenType.Embed,
       accessToken: this.accessToken,
       embedUrl: this.embedUrl,
       id: this.embedReportId,
       permissions: models.Permissions.All,
       settings: {
           filterPaneEnabled: true,
           navContentPaneEnabled: true
       }
   };

   // Get a reference to the embedded report HTML element
   public reportContainer: HTMLElement;

   // Embed the report and display it within the div container.
   public pbiService = window.powerbi as powerbi.service.Service;
   public report;
  constructor() {this.reportContainer = (document.getElementById('PowerBIQNA')) as HTMLElement; }

  ngOnInit() {
     // Get a reference to the embedded report HTML element
     this.reportContainer = (document.getElementById('PowerBIQNA')) as HTMLElement;
     this.reportContainer = this.reportContainer1.nativeElement;
     this.report = this.pbiService.embed(this.reportContainer, this.config);

     console.log(this.report, 'response report');

     console.log(this.config, 'this.config');

     console.log(this.reportContainer, 'this.reportContainer');
  }

}

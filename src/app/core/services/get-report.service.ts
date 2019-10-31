import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetReportService {

  constructor(
    private http: HttpClient
  ) { }

  getEmbededUrlReport() {
    // const url = `/pbiRest/getReport`;
    const url = `/demoEmbed/getDemoEmbed`;
    // const url =  `https://apipui.azurewebsites.net/demoEmbed/getDemoEmbed`;
    const postBody = {

    };
    const headers = {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    };

    // return this.http.post(url, postBody,  { headers });
    return this.http.get(url, { headers });
  }
}

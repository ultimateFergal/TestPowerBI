import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class GetReportService {

  constructor(
    private http: HttpClient
  ) { }

  getEmbededUrlReport() {
    // const url = `/pbiRest/getReport`;
    // const url = `/demoEmbed/getDemoEmbed`;
    // const url =  `https://apipui.azurewebsites.net/demoEmbed/getDemoEmbed`;
    const url = `https://c4fdc3f2.ngrok.io/demoEmbed/getDemoEmbed`;
    const postBody = {

    };
    const headers = {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Access-Control-Allow-Origin': '*'
    };

    this.http.get(url, { headers });
    // return this.http.post(url, postBody,  { headers });
    return of({"embedToken":"eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IkJCOENlRlZxeWFHckdOdWVoSklpTDRkZmp6dyIsImtpZCI6IkJCOENlRlZxeWFHckdOdWVoSklpTDRkZmp6dyJ9.eyJhdWQiOiJodHRwczovL2FuYWx5c2lzLndpbmRvd3MubmV0L3Bvd2VyYmkvYXBpIiwiaXNzIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvN2QwNjc5OTktN2UyMy00NDFiLWFmZTQtNDkxN2RjMWM5MjY0LyIsImlhdCI6MTU3MzY3NjYwNCwibmJmIjoxNTczNjc2NjA0LCJleHAiOjE1NzM3NjMzMDMsImFjY3QiOjAsImFjciI6IjEiLCJhaW8iOiI0MlZnWUZDekUzRlc0SjFUdW43KzFJT2lmSnMzc0Ixb21hZ2Mvam8rL1Y1aHlRR05YMG9BIiwiYW1yIjpbInB3ZCJdLCJhcHBpZCI6Ijc5MDg1MzViLTdjNGItNDExMS1hYWU2LTVjMDQ1YzFjZTk5NSIsImFwcGlkYWNyIjoiMSIsImZhbWlseV9uYW1lIjoiSGVycmVyYSBCdXN0YW1hbnRlIiwiZ2l2ZW5fbmFtZSI6IllpbWkgQWxlamFuZHJvIiwiaXBhZGRyIjoiMTgxLjEzMC4xNDkuMjE2IiwibmFtZSI6IllpbWkgQWxlamFuZHJvIEhlcnJlcmEgQnVzdGFtYW50ZSIsIm9pZCI6Ijg5MmNlNjMyLTExY2EtNGQzMC04ZTE4LTYyNWZhZWFkYTFlMiIsInB1aWQiOiIxMDAzMDAwMEEwOTVCMzNCIiwic2NwIjoiQXBwLlJlYWQuQWxsIENhcGFjaXR5LlJlYWQuQWxsIENhcGFjaXR5LlJlYWRXcml0ZS5BbGwgQ29udGVudC5DcmVhdGUgRGFzaGJvYXJkLlJlYWQuQWxsIERhc2hib2FyZC5SZWFkV3JpdGUuQWxsIERhdGFmbG93LlJlYWQuQWxsIERhdGFmbG93LlJlYWRXcml0ZS5BbGwgRGF0YXNldC5SZWFkLkFsbCBEYXRhc2V0LlJlYWRXcml0ZS5BbGwgR2F0ZXdheS5SZWFkLkFsbCBHYXRld2F5LlJlYWRXcml0ZS5BbGwgUmVwb3J0LlJlYWQuQWxsIFJlcG9ydC5SZWFkV3JpdGUuQWxsIFN0b3JhZ2VBY2NvdW50LlJlYWQuQWxsIFN0b3JhZ2VBY2NvdW50LlJlYWRXcml0ZS5BbGwgV29ya3NwYWNlLlJlYWQuQWxsIFdvcmtzcGFjZS5SZWFkV3JpdGUuQWxsIiwic3ViIjoiMUpSYmhQSVg4Q05QZUVDNlBSWWtmMERXQ05JTUVKYWIyNW5VcEtMY2p0cyIsInRpZCI6IjdkMDY3OTk5LTdlMjMtNDQxYi1hZmU0LTQ5MTdkYzFjOTI2NCIsInVuaXF1ZV9uYW1lIjoieWhlcnJlcmFAaWdlcmVuY2lhLmNvbSIsInVwbiI6InloZXJyZXJhQGlnZXJlbmNpYS5jb20iLCJ1dGkiOiJMZmJ1ZTFkUWUwbTJHYXNEWVV3RkFBIiwidmVyIjoiMS4wIn0.JpVM1NdLRTJl_A6aIOcDXHOVaOwguz8SI4IYEKj3Lc-6SCHriWpvFknVzYg8q2H9MB6jf7F7CehfqeS9URV3vvL_s_na0800J5590MenGoU-sEdPdfV1-xYYUXFKMYTog3DGGJV8PrE1mGxKC0-gvZdlzu168uMIBQMzA5pYZytR1P-s8yZjVAklK6TIL2oTgWDeUTzERrAqRK2mvk8Y1s54FljzCPDeK2JSxSgBEd8474GDsAVPFyWy-ygy82AEJUr6Tv1ckiGfMdlT9qdLbYbzm-qdEVhW5-HrIkbYfKx0RfM3YEdi-ipgPOmJUPbC2ZqzRgH7knr7GqwnGSdmeQ","data":{"pbi":[{"objectType":"report","embedUrl":"https://app.powerbi.com/reportEmbed?reportId=ce50aadc-d07f-4445-9110-46b85d102623&groupId=43740bc7-5979-4a9a-86bd-1d9d52916eb4&w=2&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLVNPVVRILUNFTlRSQUwtVVMtcmVkaXJlY3QuYW5hbHlzaXMud2luZG93cy5uZXQifQ%3d%3d","reportId":"ce50aadc-d07f-4445-9110-46b85d102623"},{"objectType":"report","embedUrl":"https://app.powerbi.com/reportEmbed?reportId=ce50aadc-d07f-4445-9110-46b85d102623&groupId=43740bc7-5979-4a9a-86bd-1d9d52916eb4&w=2&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLVNPVVRILUNFTlRSQUwtVVMtcmVkaXJlY3QuYW5hbHlzaXMud2luZG93cy5uZXQifQ%3d%3d","reportId":"ce50aadc-d07f-4445-9110-46b85d102623"},{"objectType":"report","embedUrl":"https://app.powerbi.com/reportEmbed?reportId=ce50aadc-d07f-4445-9110-46b85d102623&groupId=43740bc7-5979-4a9a-86bd-1d9d52916eb4&w=2&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLVNPVVRILUNFTlRSQUwtVVMtcmVkaXJlY3QuYW5hbHlzaXMud2luZG93cy5uZXQifQ%3d%3d","reportId":"ce50aadc-d07f-4445-9110-46b85d102623"},{"objectType":"report","embedUrl":"https://app.powerbi.com/reportEmbed?reportId=ce50aadc-d07f-4445-9110-46b85d102623&groupId=43740bc7-5979-4a9a-86bd-1d9d52916eb4&w=2&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLVNPVVRILUNFTlRSQUwtVVMtcmVkaXJlY3QuYW5hbHlzaXMud2luZG93cy5uZXQifQ%3d%3d","reportId":"ce50aadc-d07f-4445-9110-46b85d102623"},{"objectType":"visual","embedUrl":"https://app.powerbi.com/reportEmbed?reportId=ce50aadc-d07f-4445-9110-46b85d102623&groupId=43740bc7-5979-4a9a-86bd-1d9d52916eb4&w=2&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLVNPVVRILUNFTlRSQUwtVVMtcmVkaXJlY3QuYW5hbHlzaXMud2luZG93cy5uZXQifQ%3d%3d","reportId":"ce50aadc-d07f-4445-9110-46b85d102623","pageName":"ReportSection1","visualName":"VisualContainer5"},{"objectType":"visual","embedUrl":"https://app.powerbi.com/reportEmbed?reportId=ce50aadc-d07f-4445-9110-46b85d102623&groupId=43740bc7-5979-4a9a-86bd-1d9d52916eb4&w=2&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLVNPVVRILUNFTlRSQUwtVVMtcmVkaXJlY3QuYW5hbHlzaXMud2luZG93cy5uZXQifQ%3d%3d","reportId":"ce50aadc-d07f-4445-9110-46b85d102623","pageName":"ReportSection","visualName":"VisualContainer8"},{"objectType":"visual","embedUrl":"https://app.powerbi.com/reportEmbed?reportId=ce50aadc-d07f-4445-9110-46b85d102623&groupId=43740bc7-5979-4a9a-86bd-1d9d52916eb4&w=2&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLVNPVVRILUNFTlRSQUwtVVMtcmVkaXJlY3QuYW5hbHlzaXMud2luZG93cy5uZXQifQ%3d%3d","reportId":"ce50aadc-d07f-4445-9110-46b85d102623","pageName":"ReportSection","visualName":"VisualContainer5"},{"objectType":"visual","embedUrl":"https://app.powerbi.com/reportEmbed?reportId=ce50aadc-d07f-4445-9110-46b85d102623&groupId=43740bc7-5979-4a9a-86bd-1d9d52916eb4&w=2&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLVNPVVRILUNFTlRSQUwtVVMtcmVkaXJlY3QuYW5hbHlzaXMud2luZG93cy5uZXQifQ%3d%3d","reportId":"ce50aadc-d07f-4445-9110-46b85d102623","pageName":"ReportSection","visualName":"VisualContainer7"},{"objectType":"visual","embedUrl":"https://app.powerbi.com/reportEmbed?reportId=ce50aadc-d07f-4445-9110-46b85d102623&groupId=43740bc7-5979-4a9a-86bd-1d9d52916eb4&w=2&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLVNPVVRILUNFTlRSQUwtVVMtcmVkaXJlY3QuYW5hbHlzaXMud2luZG93cy5uZXQifQ%3d%3d","reportId":"ce50aadc-d07f-4445-9110-46b85d102623","pageName":"ReportSection","visualName":"VisualContainer6"},{"objectType":"visual","embedUrl":"https://app.powerbi.com/reportEmbed?reportId=ce50aadc-d07f-4445-9110-46b85d102623&groupId=43740bc7-5979-4a9a-86bd-1d9d52916eb4&w=2&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLVNPVVRILUNFTlRSQUwtVVMtcmVkaXJlY3QuYW5hbHlzaXMud2luZG93cy5uZXQifQ%3d%3d","reportId":"ce50aadc-d07f-4445-9110-46b85d102623","pageName":"ReportSection","visualName":"VisualContainer5"},{"objectType":"visual","embedUrl":"https://app.powerbi.com/reportEmbed?reportId=ce50aadc-d07f-4445-9110-46b85d102623&groupId=43740bc7-5979-4a9a-86bd-1d9d52916eb4&w=2&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLVNPVVRILUNFTlRSQUwtVVMtcmVkaXJlY3QuYW5hbHlzaXMud2luZG93cy5uZXQifQ%3d%3d","reportId":"ce50aadc-d07f-4445-9110-46b85d102623","pageName":"ReportSection","visualName":"VisualContainer7"},{"objectType":"visual","embedUrl":"https://app.powerbi.com/reportEmbed?reportId=ce50aadc-d07f-4445-9110-46b85d102623&groupId=43740bc7-5979-4a9a-86bd-1d9d52916eb4&w=2&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLVNPVVRILUNFTlRSQUwtVVMtcmVkaXJlY3QuYW5hbHlzaXMud2luZG93cy5uZXQifQ%3d%3d","reportId":"ce50aadc-d07f-4445-9110-46b85d102623","pageName":"ReportSection","visualName":"VisualContainer6"},{"objectType":"visual","embedUrl":"https://app.powerbi.com/reportEmbed?reportId=ce50aadc-d07f-4445-9110-46b85d102623&groupId=43740bc7-5979-4a9a-86bd-1d9d52916eb4&w=2&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLVNPVVRILUNFTlRSQUwtVVMtcmVkaXJlY3QuYW5hbHlzaXMud2luZG93cy5uZXQifQ%3d%3d","reportId":"ce50aadc-d07f-4445-9110-46b85d102623","pageName":"ReportSection","visualName":"VisualContainer5"}],"arcgis":[{},{}],"sap":[{},{}]}})
    // return this.http.get(url, { headers });
  }

  public httpGetRequest(url: string) {
    return this.http.get(url).pipe(
      map(response => {
        return response;
      }),
      catchError(response => of(response))
    );
  }
}

import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpResponse } from '@angular/common/http';
import { ApiResponse } from '../model/response.model';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private url: string = `https://api.countapi.xyz/hit/fearless.tech/1ccb732e-b55a-4404-ad3f-0f99c02fe44e??callback=websiteVisits`;
  constructor(private http: HttpClient) {
  }

  public apiResponse(): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.url);
  }

}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as countapi from 'countapi-js';


@Injectable({
  providedIn: 'root'
})
export class ApiResponseService {
  apiUrl: string = "https://api.countapi.xyz/hit/mysite.com/visits";
  constructor() { 
    console.log(this.apiUrl);
    // countapi.visits().then((result) => {
    //   console.log(result.value);
    // });
  }
}

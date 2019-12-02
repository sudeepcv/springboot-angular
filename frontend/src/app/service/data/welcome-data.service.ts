import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
export class WelcomeMessageResponse{
  constructor(public message:string ){}
}

@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(private http:HttpClient) { }

  testServiceExecution(){
    // console.log("inside testServiceExecution");
    return this.http.get<WelcomeMessageResponse>('/hello')
  }
}

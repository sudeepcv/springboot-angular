import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import {API_URL} from './../../app.constands'
export class WelcomeMessageResponse{
  constructor(public message:string ){}
}

@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(private http:HttpClient) { }

  testServiceExecution(){
    // let basicAuthenticationString = this.createBasicAuthenticationHttpHeader()
    // let headers = new HttpHeaders({
    //   Authorization: basicAuthenticationString
    // })
    // console.log("inside testServiceExecution");

    return this.http.get<WelcomeMessageResponse>(`${API_URL}/hello`)
  }

//   createBasicAuthenticationHttpHeader(){
//     let username='sudeep'
//     let password='sudeep'
//     let basicAuthenticationString= 'Basic '+ window.btoa (username +':'+ password)
//   return basicAuthenticationString;
//   }
}

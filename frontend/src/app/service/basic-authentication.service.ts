import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators'
import {API_URL} from './../app.constands'


@Injectable({
  providedIn: 'root'
})
export class BasicAuthenticationService {

  constructor(private http: HttpClient) { }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('authenticatedUser')
    return !(user === null)
  }

  getAuthenticatedUser() {
    let user = sessionStorage.getItem('authenticatedUser')
    return user
  }
  getAuthenticatedToken() {

    let user = sessionStorage.getItem('token')
    if (this.getAuthenticatedUser())
      return user
  }

  logout() {
    sessionStorage.removeItem('authenticatedUser')
    sessionStorage.removeItem('token')

  }

  executeAuthenticationService(username, password) {
    let basicAuthenticationString = 'Basic ' + window.btoa(username + ':' + password)
    let headers = new HttpHeaders({
      Authorization: basicAuthenticationString
    })

    return this.http.get<AuthenticationBean>(`${API_URL}/basicauth`, { headers }).pipe(
      map(
        data => {
          sessionStorage.setItem('authenticatedUser', username)
          sessionStorage.setItem('token', basicAuthenticationString)
          return data
        }
      )
    )
  }
}
export class AuthenticationBean {
  constructor(public message: string) { }
}

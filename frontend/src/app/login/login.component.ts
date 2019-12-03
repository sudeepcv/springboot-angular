import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardCodedAuthenticationService } from './../service/hard-coded-authentication.service'
import { BasicAuthenticationService } from '../service/basic-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username = 'sudeep'
  password = ''
  errorMessage = 'Invalid Credentials'
  invalidLogin = false
  constructor(private router: Router,
    private hardCodedAuthenticationService: HardCodedAuthenticationService,
    private basicAuthenticationService:BasicAuthenticationService
    ) { }

  ngOnInit() {
  }
  handleLogin() {
    // if(this.username=='sudeep' && this.password=='sudeep'){
    if (this.hardCodedAuthenticationService.authenticate(this.username, this.password)) {
      this.invalidLogin = false
      this.router.navigate(['welcome', this.username])
    } else {
      this.invalidLogin = true
    }
  }

  handleBasicAuthenticationLogin() {
    this.basicAuthenticationService.executeAuthenticationService(this.username, this.password).subscribe(
      response => {
        this.invalidLogin = false
        this.router.navigate(['welcome', this.username])
      }, error => {
        this.invalidLogin = true
      }
    )
  }

  executeJWTAuthenticationService(){
        this.basicAuthenticationService.executeJWTAuthenticationService(this.username, this.password).subscribe(
      response => {
        this.invalidLogin = false
        this.router.navigate(['welcome', this.username])
      }, error => {
        this.invalidLogin = true
      }
    )

  }


}

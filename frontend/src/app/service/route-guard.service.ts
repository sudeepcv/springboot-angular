import { Injectable } from '@angular/core';
import { CanActivate ,ActivatedRouteSnapshot ,RouterStateSnapshot, Router} from '@angular/router';
import { HardCodedAuthenticationService } from './hard-coded-authentication.service';
@Injectable({
  providedIn: 'root'
})
export class RouteGuardService implements CanActivate{
constructor(private router:Router,private hardCodedAuthenticationService:HardCodedAuthenticationService) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    // throw new Error("Method not implemented.");
    if(this.hardCodedAuthenticationService.isUserLoggedIn()){
return true
  }else{
    this.router.navigate(['login'])
    return false
  }

  }





}

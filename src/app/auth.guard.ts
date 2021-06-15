import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
//import { PostService } from './app-service.service';
import { AppService } from './app.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router ,private service: AppService){

  }
  canActivate(){
    if (this.service.isUser()) {
      return true;
    }else{
      this.router.navigate(["/"]);
      return false;
    }
  }
}

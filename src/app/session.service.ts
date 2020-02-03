import { Injectable } from '@angular/core';


import { Router } from "@angular/router";
import { User } from './user';


@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor(private router:Router) {}

  verifySession():boolean{
    return Boolean(sessionStorage.getItem("user"));
  }

  getSessionUser():User{
    return JSON.parse(sessionStorage.getItem("user"));
  }

  logout(){
    sessionStorage.clear();
    this.router.navigate((['/']));
  }

  community(){
    this.router.navigate(['/community']);
  }
}

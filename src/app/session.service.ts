import { Injectable } from '@angular/core';
import { User } from './thread/classes/user.class';
import { Router } from "@angular/router";

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
}

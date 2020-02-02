import { Injectable } from '@angular/core';
import { User } from './thread/classes/user.class';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor() {}

  verifySession():boolean{
    return Boolean(sessionStorage.getItem("user"));
  }

  getSessionUser():User{
    return JSON.parse(sessionStorage.getItem("user"));
  }
}

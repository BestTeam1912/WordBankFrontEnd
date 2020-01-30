import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private url:string;
  constructor() {
    this.url="http://localhost:4200/";
   }

   public getUserByUsername(username:string){}

   public login(){}

   public registerUser(username:string, password:string){}
}

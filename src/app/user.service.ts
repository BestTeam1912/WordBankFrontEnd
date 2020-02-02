import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { User } from "./user";
import { Status } from "./status";
import { Sesh } from "./sesh";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url:string;

  constructor(private http:HttpClient) {  
    this.url="http://localhost:9000/";
   }

   public getUserByUsername(username:string){}

   public login(user:User):Observable<User>{
     return this.http.post<User>(this.url+"/login", user);
   }

   public registerUser(user:User):Observable<User>{
     console.log(this.url)
     return this.http.post<User>(this.url+"register", user);
   }

   public registerAdmin(user:User):Observable<User>{
    return this.http.post<User>(this.url+"register/admin", user);
  }

  public getSessionId():Observable<Sesh>{
    return this.http.get<Sesh>(this.url+"login/sid")
  }

}

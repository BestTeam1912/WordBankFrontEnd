import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { User } from "./user";

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
     return this.http.post<User>(this.url, user);
   }

   public registerUser(user:User):Observable<User>{
     console.log(this.url)
     return this.http.post<User>(this.url+"register", user);
   }

   public registerAdmin(user:User):Observable<User>{
     return this.http.post<User>(this.url, user);
   }
}

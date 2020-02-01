import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from "../user";
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  private user:User;
  private cuser:User;
  constructor(private service:UserService) {
    this.user=new User();
    this.cuser=new User();
   }
  
   registerUser(){
     console.log(this.user.username);
     console.log(this.user.password);
     this.service.registerUser(this.user).subscribe(res=>{
       this.cuser = res;
       console.dir(this.cuser.username);
     });
     if(this.cuser.username != "taken"){
       window.alert("User was registered successfully, you can now log in");
     }else{
       window.alert("There was an error, please try again");
     }
   }

   registerAdmin(){
    console.log(this.user.username);
     console.log(this.user.password);
     this.service.registerAdmin(this.user).subscribe(res=>{
       this.cuser = res;
       console.dir(this.cuser.username);
     });
     if(this.cuser.username != "taken"){
       window.alert("User was registered successfully, you can now log in");
     }else{
       window.alert("There was an error, please try again");
     }
  }

  ngOnInit() {
    this.user=new User();
  }

}

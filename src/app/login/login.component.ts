import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  private user:User;
  private cuser:User;
  constructor(private service:UserService) {
    this.user=new User();
   }

   login(){
    console.log(this.user.username);
    console.log(this.user.password);
     this.service.login(this.user).subscribe(res=>{
       this.cuser = res;
       console.log(this.cuser.username);
     })
     if(this.cuser.username === "login confirmed"){
      window.alert("User was registered successfully, you can now log in");
    }else if(this.cuser.username === "no match" || this.cuser.username === "user not found"){
      window.alert("Your credentials are incorrect, please try again");
    }
  }

  ngOnInit() {
    this.user = new User();
  }

}

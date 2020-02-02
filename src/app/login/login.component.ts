import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user';
import { Sesh } from '../sesh';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private user: User;
  private cuser: User;
  private sesh: Sesh;
  constructor(private service: UserService) {
    this.user = new User();
  }

  login() {
    this.service.login(this.user).subscribe(res => {
      this.cuser = res;
      if (this.cuser != null) {
        window.alert("you have logged in successfully");
      } else {
        window.alert("Your credentials are incorrect, please try again");
      }
      this.cuser.password="";
      sessionStorage.setItem("user", JSON.stringify(this.cuser));
      // this.getSessionId();
      this.service.getSessionId().subscribe(res=>{
        this.sesh = res;
        sessionStorage.setItem("seshId", JSON.stringify(this.sesh));
        console.log(this.sesh)
      }, err => {
        console.log(err);
      })
      // console.log(sessionStorage.getItem("user"));
      // console.log(sessionStorage.getItem("seshId"));
    })
    
  }

  ngOnInit() {
    this.user = new User();
  }

}

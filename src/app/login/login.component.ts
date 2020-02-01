import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private user: User;
  private cuser: User;
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
      console.log(this.cuser.type);
      this.cuser.password="";
      sessionStorage.setItem("user", JSON.stringify(this.cuser));
      console.log(sessionStorage.getItem("id"));
    })
    
  }

  ngOnInit() {
    this.user = new User();
  }

}

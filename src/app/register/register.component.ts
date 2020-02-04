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

  private user: User;
  private cuser: User;
  private regex1: RegExp = /[A-Z]/;
  private regex2: RegExp = /[a-z]/;
  private spacex: RegExp = /\s/;


  constructor(private service: UserService) {
    this.user = new User();
    this.cuser = new User();
  }

  registerUser() {
    console.log(this.user.username);
    console.log(this.user.password);
    if (this.user.username == null || this.user.password == null) {
      window.alert("Both username and password are required!")
      this.user.username = null;
      this.user.password = null;
    } else if (this.regex1.test(this.user.password)) {
      if (this.regex2.test(this.user.password)) {
        if (this.spacex.test(this.user.password)) {
          window.alert("your password cannot contain white spaces!")
        } else {
          this.service.registerUser(this.user).subscribe(res => {
            this.cuser = res;
            console.dir(this.cuser.username);
            if (this.cuser.username != "taken") {
              window.alert("User was registered successfully, you can now log in");
              this.user.username = null;
              this.user.password = null;
            } else {
              window.alert("There was an error, please try again");
            }
          });
        }
      } else {
        window.alert("your password must have a lowercase letter!")
      }
    } else {
      window.alert("youre password must contain an upper case letter!")
      this.user.password = null;
    }
  }

  registerAdmin() {
    console.log(this.user.username);
    console.log(this.user.password);
    this.service.registerAdmin(this.user).subscribe(res => {
      this.cuser = res;
      console.dir(this.cuser.username);
    });
    if (this.cuser.username != "taken") {
      window.alert("User was registered successfully, you can now log in");
    } else {
      window.alert("There was an error, please try again");
    }
  }

  ngOnInit() {
    this.user = new User();
  }

}

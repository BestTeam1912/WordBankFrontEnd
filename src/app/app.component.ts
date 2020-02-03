import { Component } from '@angular/core';
import { SessionService } from './session.service'; 
import { Sesh } from "./sesh";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Relpy';
  private loggedIn:Boolean = this.session.verifySession();
  constructor(private session:SessionService){
  }

  logout(){
    this.session.logout();
  }

  ngOnInit(){
    console.log(this.loggedIn);
    
  }
}

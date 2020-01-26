import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CommentComponent } from './comment/comment.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommunityComponent } from './community/community.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CommunityDetailComponent } from './community-detail/community-detail.component';
import { ThreadComponent } from './thread/thread.component';
import { ThreadDetailComponent } from './thread-detail/thread-detail.component';
import { from } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    CommunityComponent,
    LoginComponent,
    RegisterComponent,
    CommunityDetailComponent,
    ThreadComponent,
    ThreadDetailComponent,
    CommentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

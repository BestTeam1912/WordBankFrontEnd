import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ThreadComponent } from './thread/thread.component';
import { ThreadDetailComponent } from './thread-detail/thread-detail.component';
import { CommunityComponent } from './community/community.component';
import { CommunityDetailComponent } from './community-detail/community-detail.component';
import { CommentComponent } from './comment/comment.component';


const routes: Routes = [
  {path:"login", component:LoginComponent },
  {path:"register", component:RegisterComponent },
  {path:"thread", component:ThreadComponent },
  {path:"thread-detail", component:ThreadDetailComponent },
  {path:"community", component:CommunityComponent },
  {path:"community-detail", component:CommunityDetailComponent },
  {path:"comment", component:CommentComponent },
  {path: 'community/:title', component: CommunityDetailComponent },
  {path: "community/:title/:threadId", component: ThreadDetailComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

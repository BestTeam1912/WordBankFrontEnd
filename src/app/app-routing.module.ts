import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ThreadComponent } from './thread/thread.component';
import { ThreadDetailComponent } from './thread-detail/thread-detail.component';
import { CommunityComponent } from './community/community.component';
import { CommunityDetailComponent } from './community-detail/community-detail.component';
import { CommentComponent } from './comment/comment.component';
import { AuthGuardService } from './auth-guard.service';


const routes: Routes = [
  {path:"login", component:LoginComponent },
  {path:"register", component:RegisterComponent },
  {path:"thread-detail", component:ThreadDetailComponent, canActivate:[AuthGuardService] },
  {path:"community", component:CommunityComponent, canActivate:[AuthGuardService] },
  {path:"community-detail", component:CommunityDetailComponent, canActivate:[AuthGuardService] },
  {path: 'community/:title', component: CommunityDetailComponent, canActivate:[AuthGuardService] },
  {path: "community/:title/:threadId", component: ThreadDetailComponent, canActivate:[AuthGuardService] }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

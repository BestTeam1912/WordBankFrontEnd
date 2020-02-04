import { Component, OnInit } from '@angular/core';
import { ThreadService } from '../thread.service';
import { Thread } from '../thread/classes/thread.class';
import { Router, ActivatedRoute } from '@angular/router';
import { CommentService } from '../comment.service';
import { Comment } from '../comment/class/comment';
import { SessionService } from '../session.service';
import { Moneymap } from '../moneymap.class';
import { User } from '../user';


@Component({
  selector: 'app-thread-detail',
  templateUrl: './thread-detail.component.html',
  styleUrls: ['./thread-detail.component.css']
})
export class ThreadDetailComponent implements OnInit {
  private thread:Thread;
  private addCommentToggle:boolean
  private comments:Comment[];
  private comment:Comment;
  private reply:Comment;
  private moneyMap:Moneymap;
  private user:User;
  private errorMessage:string;
  constructor(private threadService:ThreadService, 
    private commentService:CommentService ,
    private sessionService:SessionService,
    private router:Router, 
    private route:ActivatedRoute) {
    this.thread = new Thread();
    this.comments = [];
    this.comment = new Comment();
    this.reply = new Comment();
    this.moneyMap = new Moneymap();
    this.user = new User();
    this.errorMessage = "";
  }

  toggleAddingComments(){
    this.addCommentToggle = !this.addCommentToggle;
  } 

  closeAddingComments(){
    this.addCommentToggle = false;
  }

  postComment(){
    if(this.sessionService.verifySession()){
      if(this.moneyMap.currency === 0){
        this.errorMessage = "Insufficent Funds Cannot Post Comment";
      }else{
        this.comment.user = this.sessionService.getSessionUser();
        this.threadService.addComment(this.thread, this.comment).subscribe( data => {
          this.threadService.getUserCurrency(this.thread, this.user).subscribe( money => {
            this.setMoneyMap(money);
          });
        }, err => {
          this.errorMessage = err.error.message;
        });
        this.threadService.addUserToThread(this.thread, this.comment.user).subscribe( data => {
          this.refreshComments();
          this.comment = new Comment();
        });
        this.closeAddingComments();
      }
    }
  }

  closeError(){
    this.errorMessage ="";
  }

  refreshComments(){
    this.threadService.findCommentsByThread(this.thread.id).subscribe( comments => {
      this.comments = comments;
      this.threadService.getUserCurrency(this.thread, this.user).subscribe( money => {
        this.moneyMap.currency = money;
      } )
    })
  }

  displayError(message:string){
    this.errorMessage = message;
  }

  setMoneyMap(money:number){
    this.moneyMap.userId = this.user.id;
    this.moneyMap.currency = money;
  }

  replySent(sent:boolean){
    this.threadService.getUserCurrency(this.thread, this.user).subscribe( moneyMap => {
      this.moneyMap.currency = moneyMap;
    })
  }

  refreshReplies(replyPosted:boolean){
    this.threadService.findCommentsByThread(this.thread.id).subscribe( comments => {
      this.comments = comments;
    })
  }

  logout(){
    this.sessionService.logout();
  }

  Community(){
    this.sessionService.community();
  }

  ngOnInit() {
    const threadId = +this.route.snapshot.paramMap.get('threadId');
    this.threadService.findById(threadId).subscribe( thread => {
      this.thread = thread
      this.user = this.sessionService.getSessionUser();
      this.threadService.addUserToThread(this.thread, this.user).subscribe( data => {
        this.threadService.getUserCurrency(this.thread, this.user).subscribe( money => {
          this.setMoneyMap(money);
        })
      })
      this.threadService.findCommentsByThread(threadId).subscribe( comments => this.comments = comments );
    });
    this.addCommentToggle = false;
    this.user = this.sessionService.getSessionUser();
  }



}

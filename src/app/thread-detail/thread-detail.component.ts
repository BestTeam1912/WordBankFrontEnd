import { Component, OnInit } from '@angular/core';
import { ThreadService } from '../thread.service';
import { Thread } from '../thread/classes/thread.class';
import { Router, ActivatedRoute } from '@angular/router';
import { CommentService } from '../comment.service';
import { Comment } from '../comment/class/comment';


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
  constructor(private threadService:ThreadService, private commentService:CommentService ,private router:Router, private route:ActivatedRoute) {
    this.thread = new Thread();
    this.comments = [];
    this.comment = new Comment();
  }

  toggleAddingComments(){
    this.addCommentToggle = !this.addCommentToggle;
  } 

  closeAddingComments(){
    this.addCommentToggle = false;
  }

  postComment(){
    this.threadService.addComment(this.thread, this.comment).subscribe();
    this.closeAddingComments()
  }

  refreshComment(){
    this.threadService.findCommentsByThread(this.thread.id).subscribe( comments => this.comments = comments )
  }

  ngOnInit() {
    const threadId = +this.route.snapshot.paramMap.get('threadId');
    this.threadService.findById(threadId).subscribe( thread => this.thread = thread );
    this.threadService.findCommentsByThread(threadId).subscribe( comments => this.comments = comments );
    this.addCommentToggle = false;
  }



}

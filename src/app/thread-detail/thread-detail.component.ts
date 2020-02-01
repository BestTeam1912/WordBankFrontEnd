import { Component, OnInit } from '@angular/core';
import { ThreadService } from '../thread.service';
import { Thread } from '../thread/classes/thread.class';
import { Router, ActivatedRoute } from '@angular/router';
import { CommentService } from '../comment.service';


@Component({
  selector: 'app-thread-detail',
  templateUrl: './thread-detail.component.html',
  styleUrls: ['./thread-detail.component.css']
})
export class ThreadDetailComponent implements OnInit {
  private thread:Thread;
  constructor(private threadService:ThreadService, private commentService:CommentService ,private router:Router, private route:ActivatedRoute) {
    this.thread = new Thread();
  }
  ngOnInit() {
    const threadId = +this.route.snapshot.paramMap.get('threadId');
    this.threadService.findById(threadId).subscribe( thread => this.thread = thread );
  }
}

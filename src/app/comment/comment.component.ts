import { Component, OnInit } from '@angular/core';
import { Comment } from './class/comment';
import { ActiveUser } from './class/active-user';
import { Thread } from '../thread/classes/thread.class';
import { User } from '../thread/classes/user.class';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
	private comment: Comment;
	constructor() {//(AtiveUser au, Thread thread) {
		this.comment = new Comment();
		this.comment.id = 10;
		let user = new User();
		user.username = "user";
		user.password = "pass";
		this.comment.activeUser = new ActiveUser(user);
		this.comment.dateCreated = new Date();
		this.comment.dateCreated.toLocaleDateString();
		this.comment.replies = null;
		this.comment.replyingTo = null;
		this.comment.text = "lorem ips um luuple aaapfrr doris crab acke me da";
		this.comment.thread = new Thread();
	}

	ngOnInit() {
	}

}

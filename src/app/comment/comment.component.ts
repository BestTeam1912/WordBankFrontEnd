import { Component, OnInit } from '@angular/core';
import { Comment } from './class/comment';
import { User } from '../thread/classes/user.class';
import { ActiveUser } from './class/active-user';
import { CommentService } from '../comment.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
	private comment: Comment;
	private reply: Comment;
	private wantToReply: boolean;
	constructor(private service:CommentService) {
		this.wantToReply = false;
		this.comment = new Comment();
		this.comment.replies = [];
		this.reply = new Comment();
		this.comment.id = 10;
		this.comment.dateCreated = new Date;
		this.comment.text = "some text like the quick red fox jumped over the white picket fence"
		let user = new User();
		user.password = "pass";
		user.username = "user";
		let activeuser = new ActiveUser();
		activeuser.dateCreated = new Date();
		activeuser.user = user;
		this.comment.activeUser = activeuser;
	}

	setComment(comment: Comment){
		this.comment = comment;
	}

	replyToThisComment(){
		this.wantToReply = !this.wantToReply;
	}

	cancel(){
		this.wantToReply = false;
		this.reply = new Comment();
	}

	post(){
		this.reply.activeUser = new ActiveUser();
		this.reply.dateCreated = new Date();
		// this.reply.replyingTo = this.comment;
		// this.reply.thread = this.comment.thread;
		// this.reply.text = document.getElementById("texts").value;
		this.service.addComment(this.reply).subscribe(res=>{
			this.reply = res;
			this.comment.replies.push(this.reply);
		});
		// this.comment.replies.push(this.reply);
		console.log(this.reply);
	}

	ngOnInit() {
	}

}

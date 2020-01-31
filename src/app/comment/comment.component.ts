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
		this.comment.text = "";
		this.comment.replies = [];
		this.reply = new Comment();
		this.reply.text = "";
		// this.comment.id = 10;
		this.comment.dateCreated = new Date;
		console.log(this.comment.dateCreated.toString);
		this.comment.text = "some text like the quick red fox jumped over the white picket fence"
		// let user = new User();
		// user.password = "pass";
		// user.username = "user";
		// let activeuser = new ActiveUser();
		// activeuser.dateCreated = new Date();
		// activeuser.user = user;
		this.service.addComment(this.comment)
			.subscribe(res=>{
				this.comment = res;
				console.log(this.comment);
			});
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
		//this.reply.activeUser = new ActiveUser();
		this.reply.dateCreated = new Date();

		// this.reply.replyingTo = this.comment;
		// this.reply.thread = this.comment.thread;
		// this.reply.text = document.getElementById("texts").value;
		if(this.reply.isValidComment()){
			this.service.addComment(this.reply).subscribe(res=>{
				this.reply = res;
				this.comment.replies.push(this.reply);
				this.reply = new Comment();
				this.service.updateComment(this.comment).subscribe(res=>this.comment = res);
			});
		}else{
			this.reply.text = "Needs Text to post a comment In this space now we"+
			"will try to take as many characters away so that the message can"+
			"not be sent. I think it needs five hundred characters before it "+
			"stops the comment from going through to stop you a second time"+
			". I hope this works well. Now you might know what is going on"+
			"I don't know if I have typed enough characters to stop it from "+
			"going through, So I will just type a little more to confirm then"+
			" copy and paste\n"+"Needs Text to post a comment In this space now we"+
			"will try to take as many characters away so that the message can"+
			"not be sent. I think it needs five hundred characters before it "+
			"stops the comment from going through to stop you a second time"+
			". I hope this works well. Now you might know what is going on"+
			"I don't know if I have typed enough characters to stop it from "+
			"going through, So I will just type a little more to confirm then"+
			" copy and paste";
		}
		
		// this.comment.replies.push(this.reply);
		console.log(this.reply);
	}

	ngOnInit() {
	}

}

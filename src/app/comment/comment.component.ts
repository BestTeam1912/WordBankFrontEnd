import { Component, OnInit } from '@angular/core';
import { Comment } from './class/comment';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
	private comment: Comment;
	constructor() {
		this.comment = new Comment();
		// this.comment.id = 10;
		// this.comment.dateCreated = new Date;
		// this.comment.text = "some text like the quick red fox jumped over the white picket fence"
		// let user = new User();
		// user.password = "pass";
		// user.username = "user";
		// let activeuser = new ActiveUser();
		// activeuser.dateCreated = new Date();
		// activeuser.user = user;
		// this.comment.activeUser = activeuser;
	}

	setComment(comment: Comment){
		this.comment = comment;
	}

	reply(){
//		document.getElementById()
	}

	ngOnInit() {
	}

}

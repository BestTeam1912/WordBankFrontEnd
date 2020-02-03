import { EventEmitter, Component, OnInit, Input, Output } from '@angular/core';
import { Comment } from './class/comment';
import { CommentService } from '../comment.service';
import { ThreadService } from '../thread.service';
import { Thread } from '../thread/classes/thread.class';
import { SessionService } from '../session.service';
import { Moneymap } from '../moneymap.class';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
	@Input() private thread:Thread;
	@Input() private comment: Comment;
	@Input() private reply: Comment;
	@Input() private moneyMap:Moneymap;
	@Output() private commentListEmitter:EventEmitter<boolean>;
	@Output() private invalidFundsEmitter: EventEmitter<string>;
	@Output() private replySent:EventEmitter<boolean>;
	private wantToReply: boolean;
	constructor(private service:CommentService, 
		private threadService:ThreadService,
		private sessionService:SessionService) {
		this.wantToReply = false;
		this.comment = new Comment();
		this.comment.text = "";
		this.comment.replies = [];
		this.reply = new Comment();
		this.reply.text = "";
		this.comment.dateCreated = new Date();
		this.commentListEmitter = new EventEmitter<boolean>();
		this.invalidFundsEmitter = new EventEmitter<string>();
		this.replySent = new EventEmitter<boolean>();
		this.moneyMap = new Moneymap(); 
	}

	setComment(comment: Comment){
		this.comment = comment;
	}

	replyToThisComment(){
		this.wantToReply = !this.wantToReply;
	}

	postReply(posted:boolean){
		if(this.sessionService.verifySession()){
			if(this.moneyMap.currency != 0){
				this.reply.user = this.sessionService.getSessionUser();
				this.threadService.replyComment(this.thread, this.comment, this.reply).subscribe( 
					data => {
						this.commentListEmitter.emit(true);
						this.replySent.emit(true);
					}, 
					err => {
						this.invalidFundsEmitter.emit(err.error.message);
				});
			}else{
				this.invalidFundsEmitter.emit("Insufficient Funds");
			}
		}
		this.cancel();
	}

	cancel(){
		this.wantToReply = false;
		this.reply = new Comment();
	}

	post(){
		this.reply.dateCreated = new Date();
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
	}

	ngOnInit() {
		this.service.addComment(this.comment)
			.subscribe(res=>{
				this.comment = res;
			});
	}

}

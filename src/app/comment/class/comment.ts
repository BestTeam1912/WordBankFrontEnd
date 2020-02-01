import { Thread } from "../../thread/classes/thread.class";
import { ActiveUser } from "./active-user";
import { User } from 'src/app/thread/classes/user.class';


export class Comment {
	id: number;
	text: string;
	replies: Comment[];
	dateCreated: Date;
	user:User;

	constructor(){
		this.text = "";
		this.replies = [];
	}

	isValidComment(){
		return (this.text.length) ? ((this.text.length > 255) ? false : true) : false;
	}
}

import { User } from '../../user';


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

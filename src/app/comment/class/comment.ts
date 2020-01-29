import { Thread } from "../../thread/classes/thread.class";
import { ActiveUser } from "./active-user";


export class Comment {
	id: number;
	text: string;
	replies: Comment[];
	thread: Thread;
	dateCreated: Date;
	activeUser: ActiveUser;
	replyingTo: Comment;
}

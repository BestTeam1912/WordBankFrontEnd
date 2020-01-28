import { User } from "../../thread/classes/user.class";

export class ActiveUser {
	//user: User;
	charBank: number;
	dateCreated: Date;

	constructor(private user: User){
		//this.user = user;
		this.charBank = 500;
	}
}

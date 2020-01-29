import { User } from "../../thread/classes/user.class";

export class ActiveUser {
	user: User;
	charBank: number;
	dateCreated: Date;

	constructor(){
		this.user = new User();
		this.charBank = 500;
	}
}

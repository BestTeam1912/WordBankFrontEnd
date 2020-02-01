import { User } from './user.class';
import { Community } from 'src/app/community/classes/community.class';

export class Thread{
    id:number;
    title:string;
    description:string;
    comments:Comment[];
    dateCreated:Date;
}
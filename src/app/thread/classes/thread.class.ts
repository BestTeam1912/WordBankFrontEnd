import { User } from './user.class';

export class Thread{
    id:number;
    title:string;
    description:string;
    comments:Comment[];
    dateCreated:Date;
}
import { Thread } from '../../thread/classes/thread.class';

export class Community{
    id:number;
    title:string;
    description:string;
    thread:Thread[];
    dataCreated:Date;
}
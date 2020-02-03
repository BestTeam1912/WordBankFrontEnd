import { Injectable } from '@angular/core';
import { Thread } from './thread/classes/thread.class';
import { HttpClient} from "@angular/common/http";
import { Observable, of } from 'rxjs';
import { Community } from './community/classes/community.class';
import { Comment } from './comment/class/comment';
import { User } from './user';
import { Moneymap } from './moneymap.class';

@Injectable({
  providedIn: 'root'
})
export class ThreadService {
  private threads:Thread[];
  private url:string;

  constructor(private http:HttpClient) {
    this.url="http://localhost:9000/thread";
    this.threads=[];
  }

  findAll():Observable<Thread[]>{
    return of(this.threads);
  }

  findById(id:number):Observable<Thread>{
    return this.http.get<Thread>(this.url + "/get/" + id);
  }

  findCommentsByThread(threadId:number):Observable<Comment[]>{
    return this.http.get<Comment[]>(this.url + "/get/comments/" + threadId);
  }

  addComment(thread:Thread, comment:Comment):Observable<Comment>{
    comment.dateCreated = new Date();
    return this.http.post<Comment>(this.url + "/add/comment/" + thread.id, comment);
  }

  addUserToThread(thread:Thread, user:User):Observable<Moneymap>{
    return this.http.post<Moneymap>("http://localhost:9000/thread/add/user/" + thread.id , user);
  }

  getUserCurrency(thread:Thread, user:User):Observable<number>{
    return this.http.get<number>(`${this.url}/get/currency/${thread.id}/${user.id}`);
  }

  replyComment(thread:Thread, comment:Comment, reply:Comment):Observable<Comment>{
    reply.dateCreated = new Date();
    return this.http.post<Comment>(this.url + "/reply/" + thread.id + "/" + comment.id, reply);
  }
  createThread(thread:Thread):Observable<Thread>{
    return this.http.post<Thread>(this.url + "/add", thread);
  }

  deleteThread(threadid:number, comid:number){
    return this.http.delete<Community>(this.url + "/delete/" + threadid + "/" + comid);
  }
}

import { Injectable } from '@angular/core';
import { Thread } from './thread/classes/thread.class';
import { HttpClient} from "@angular/common/http";
import { Observable, of } from 'rxjs';
import { Community } from './community/classes/community.class';
import { Comment } from './comment/class/comment';

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

  replyComment(thread:Thread, comment:Comment, reply:Comment):Observable<Comment>{
    reply.dateCreated = new Date();
    return this.http.post<Comment>(this.url + "/reply/" + thread.id + "/" + comment.id, reply);
  }


  createThread(thread:Thread):Observable<Thread>{
    return this.http.post<Thread>(this.url + "/add", thread);
  }

  updateThread(thread:Thread){
    let threadToUpdate = this.threads.find( t => t.id == thread.id )
    threadToUpdate = thread;
  }

  deleteThread(threadid:number, comid:number){
    console.log(this.url + "/delete/" + threadid);
    return this.http.delete<Community>(this.url + "/delete/" + threadid + "/" + comid);
  }
}

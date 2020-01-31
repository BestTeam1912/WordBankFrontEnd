import { Injectable } from '@angular/core';
import { THREAD } from './thread/THREAD.dummydata';
import { Thread } from './thread/classes/thread.class';
import { Observable, of } from 'rxjs';
import { Community } from './community/classes/community.class';

@Injectable({
  providedIn: 'root'
})
export class ThreadService {
  private threads:Thread[];

  constructor() {
    this.threads = THREAD;
  }

  findAll():Observable<Thread[]>{
    return of(this.threads);
  }

  findById(id:number):Observable<Thread>{
    return of(this.threads.find( t => t.id === id ));
  }
  
  removeById(id:number){
    this.threads = this.threads.filter( t => {
      t.id != id;
    });
  }

  findByCommunity(community:Community):Observable<Thread[]>{
    return of();
  }

  findCommentsByThread(thread:Thread){
    // Get All Commends based on thread
  }

  createThread(thread:Thread){
    this.threads.push(thread);
  }

  updateThread(thread:Thread){
    let threadToUpdate = this.threads.find( t => t.id == thread.id )
    threadToUpdate = thread;
  }
}

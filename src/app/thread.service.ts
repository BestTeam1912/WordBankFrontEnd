import { Injectable } from '@angular/core';
// import { THREAD } from './thread/THREAD.dummydata';
import { Thread } from './thread/classes/thread.class';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThreadService {
  private threads:Thread[];

  constructor() {
    // this.threads = [THREAD];
    this.threads=[];
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

  createThread(thread:Thread){
    this.threads.push(thread);
  }

  updateThread(thread:Thread){
    let threadToUpdate = this.threads.find( t => t.id == thread.id )
    threadToUpdate = thread;
  }
}

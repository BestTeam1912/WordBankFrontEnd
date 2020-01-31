import { Injectable } from '@angular/core';
// import { THREAD } from './thread/THREAD.dummydata';
import { Thread } from './thread/classes/thread.class';
import { HttpClient} from "@angular/common/http";
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThreadService {
  private threads:Thread[];
  private url:string;

  constructor(private http:HttpClient) {
    this.url="http://localhost:9000/thread";
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

  createThread(thread:Thread):Observable<Thread>{
    return this.http.post<Thread>(this.url + "/add", thread);
  }

  updateThread(thread:Thread){
    let threadToUpdate = this.threads.find( t => t.id == thread.id )
    threadToUpdate = thread;
  }
}

import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Community } from './community/classes/community.class';
import { Observable, of } from 'rxjs';
// import { COMMUNITIES } from './mock-communities';
import { HttpClient} from "@angular/common/http";
import { Thread } from './thread/classes/thread.class';


@Injectable({
  providedIn: 'root'
})
export class CommunityService {
  private url:string;

  constructor(private http:HttpClient) { 
    this.url="http://localhost:9000/community";
  }
  public getCommunityByTitle(title:string){
    return this.http.get<Community>(this.url + "/" + title);
  }

  // public getCommunityByTitle(title:string){
  //   return COMMUNITIES.find(element => element.title == title);
  // }

  getCommunities(): Observable<Community[]> {
    return this.http.get<Community[]>(this.url);
  }

  addCommunity(com:Community):Observable<Community>{
    return this.http.post<Community>(this.url + "/add", com);
  }

  deleteCommunity(com:Community){
    return this.http.delete<Community>(this.url + "/delete/" + com.id);
  }

  public updateCommunity(comid:number, thread: Thread){
    return this.http.put<Community>(this.url + "/update/" + comid, thread);
  }

}

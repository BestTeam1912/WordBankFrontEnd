import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Community } from './community/classes/community.class';
import { Observable, of } from 'rxjs';
import { COMMUNITIES } from './mock-communities';

@Injectable({
  providedIn: 'root'
})
export class CommunityService {
  private url:string;

  constructor() { 
    this.url="http://localhost:4200/";
  }
  // public getCommunityByTitle(title:string){
  //   return this.http.get<Community>(this.url + "/" + title);
  // }

  public getCommunityByTitle(title:string){
    return COMMUNITIES.find(element => element.title == title);
  }


  getCommunities(): Observable<Community[]> {
    // TODO: send the message _after_ fetching the heroes
    return of(COMMUNITIES);
  }
}

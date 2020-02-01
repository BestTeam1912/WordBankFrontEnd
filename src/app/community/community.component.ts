import { Component, OnInit } from '@angular/core';
import { Community } from './classes/community.class';
import { CommunityService } from '../community.service';



@Component({
  selector: 'app-community',
  templateUrl: './community.component.html',
  styleUrls: ['./community.component.css']
})
export class CommunityComponent implements OnInit {
  communities : Community[];
  private addCommunityBool: boolean;
  private addCom: Community;

  constructor(private service:CommunityService) { 
    this.addCommunityBool=false;
    this.addCom = new Community();
    this.communities = [];
  }

  ngOnInit() {
    this.getCommunities();
  }

  getCommunities(): void {
    this.service.getCommunities()
        .subscribe(communities => this.communities = communities);
  }

  changeCommunityBool(){
    this.addCommunityBool=!this.addCommunityBool;
  }


  addNewCommunity(){
    this.addCom.dateCreated=new Date();
    this.service.addCommunity(this.addCom).subscribe(data => this.communities.push(data));
    this.addCom = new Community();
    this.addCommunityBool=!this.addCommunityBool;
  }

  deleteCommunity(deleteCom: Community){
    this.communities = this.communities.filter(h => h !== deleteCom);
    this.service.deleteCommunity(deleteCom).subscribe();
  }

  // delete(animal: Animal): void {
  //   this.animals = this.animals.filter(h => h !== animal);
  //   this.service.deleteAnimal(animal).subscribe();
  // }

}

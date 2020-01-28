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
  // selectedCom: Community;

  constructor(private service:CommunityService) { }

  ngOnInit() {
    this.getCommunities();
  }

  getCommunities(): void {
    this.service.getCommunities()
        .subscribe(communities => this.communities = communities);
  }

  // onSelect(com: Community): void {
  //   this.selectedCom = com;
  // }

}

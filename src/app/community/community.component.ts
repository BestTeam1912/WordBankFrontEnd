import { Component, OnInit } from '@angular/core';
import { COMMUNITIES } from '../mock-communities';
import { Community } from './classes/community.class';


@Component({
  selector: 'app-community',
  templateUrl: './community.component.html',
  styleUrls: ['./community.component.css']
})
export class CommunityComponent implements OnInit {
  communities = COMMUNITIES;
  selectedCom: Community;

  constructor() { }

  ngOnInit() {
  }

  onSelect(com: Community): void {
    this.selectedCom = com;
  }

}

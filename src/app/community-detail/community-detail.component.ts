import { Component, OnInit } from '@angular/core';
import { Community } from '../community/classes/community.class';
import { CommunityService } from '../community.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-community-detail',
  templateUrl: './community-detail.component.html',
  styleUrls: ['./community-detail.component.css']
})
export class CommunityDetailComponent implements OnInit {

  private com: Community;
  private addThreadBool: Boolean;
  constructor(private service:CommunityService,
    private route: ActivatedRoute,
    private router:Router) {
    this.com=new Community();
   }
   
  ngOnInit() {
    this.getCommunityByTitle();
    this.addThreadBool=false;
  }

  getCommunityByTitle(): void {
    const title = this.route.snapshot.paramMap.get('title');
    this.com = this.service.getCommunityByTitle(title);
  }

  changeThreadBool(){
    this.addThreadBool=!this.addThreadBool;
  }

  // getCommunityByTitle(): void {
  //   const id = +this.route.snapshot.paramMap.get('title');
  //   this.service.getCommunityByTitle(id)
  //     .subscribe(com => this.com = com);
  // }

}

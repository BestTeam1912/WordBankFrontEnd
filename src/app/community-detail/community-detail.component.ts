import { Component, OnInit } from '@angular/core';
import { Community } from '../community/classes/community.class';
import { CommunityService } from '../community.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Thread } from '../thread/classes/thread.class';

@Component({
  selector: 'app-community-detail',
  templateUrl: './community-detail.component.html',
  styleUrls: ['./community-detail.component.css']
})
export class CommunityDetailComponent implements OnInit {

  private com: Community;
  private addThreadBool: Boolean;
  private addThread: Thread;
  private threads: Thread[];

  constructor(private service:CommunityService,
    private route: ActivatedRoute,
    private router:Router) {
    this.com=new Community();
    this.addThread= new Thread();
   }
   
  ngOnInit() {
    this.getCommunityByTitle();
    this.addThreadBool=false;
    // getThreadsByID(com.id);
  }

  getCommunityByTitle(): void {
    const title = this.route.snapshot.paramMap.get('title');
    this.service.getCommunityByTitle(title).subscribe(com => this.com = com);
  }

  changeThreadBool(){
    this.addThreadBool=!this.addThreadBool;
  }

  addNewThread(){
    console.log(this.addThread.title);
    console.log(this.addThread.description);
    this.addThreadBool=!this.addThreadBool;
  }

}

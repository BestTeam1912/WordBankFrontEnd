import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule } from '@Angular/common/http/testing';


import { CommunityService } from './community.service';

fdescribe('CommunityService', () => {
  beforeEach(() => TestBed.configureTestingModule({
	  imports: [HttpClientTestingModule],
	  providers:[CommunityService]
  }));

  it('should be created', inject([CommunityService], () => {
    const service: CommunityService = TestBed.get(CommunityService);
    expect(service).toBeTruthy();
  }));

  it('should have method getCommunities', inject([CommunityService], ()=>{
	  const service: CommunityService = TestBed.get(CommunityService);
	  expect(service.getCommunities).toBeTruthy();
  }))
});

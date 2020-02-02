import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { UserService } from './user.service';

fdescribe('UserService', () => {
  beforeEach(() => TestBed.configureTestingModule({
	  imports:[HttpClientTestingModule],
	  providers:[UserService]
  }));

  it('should be created', inject([UserService], () => {
    const service: UserService = TestBed.get(UserService);
    expect(service).toBeTruthy();
  }));

  it('should have getSessionId function', inject([UserService], (service)=>{
	  expect(service.getSessionId).toBeTruthy();
  }))
});

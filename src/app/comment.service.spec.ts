import { TestBed, inject } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

import { CommentService } from './comment.service';

fdescribe('CommentService', () => {
	beforeEach(() => {TestBed.configureTestingModule({
			imports: [HttpClientModule],
			providers:[CommentService]
		})
	});

  it('should be created', inject([CommentService], (service: CommentService) => {
    expect(service).toBeTruthy();
  }));

  it('should have addComment', inject([CommentService], (service:CommentService)=>{
	  expect(service.addComment).toBeTruthy();
  }));

  it('should have updateComment', inject([CommentService], (service: CommentService) =>{
	  expect(service.updateComment).toBeTruthy();
  }));

});

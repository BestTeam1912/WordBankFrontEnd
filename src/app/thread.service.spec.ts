import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing'

import { ThreadService } from './thread.service';

fdescribe('ThreadService', () => {
	beforeEach(() => TestBed.configureTestingModule({
		imports:[HttpClientTestingModule],
		providers:[ThreadService]
	}));

	it('should be created', inject([ThreadService], (thread) => {
		//const service: ThreadService = TestBed.get(ThreadService);
		expect(thread).toBeTruthy();
	}));

	it('should have addComment function', inject([ThreadService], (service) =>{
		expect(service.addComment).toBeTruthy();
	}))
});

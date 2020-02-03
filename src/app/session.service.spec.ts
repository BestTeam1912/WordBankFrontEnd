import { TestBed, inject } from '@angular/core/testing';

import { SessionService } from './session.service';

fdescribe('SessionService', () => {
	beforeEach(() => TestBed.configureTestingModule({
		imports:[],
		providers:[SessionService]
	}));

	it('should be created', inject([SessionService], () => {
		const service: SessionService = TestBed.get(SessionService);
		expect(service).toBeTruthy();
	}));

	it('should have verifySession function', inject([SessionService], (service)=>{
		expect(service.verifySession).toBeTruthy();
	}));
});

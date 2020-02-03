import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule } from '@Angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { AuthGuardService } from './auth-guard.service';

fdescribe('AuthGuardService', () => {
	beforeEach(() => TestBed.configureTestingModule({
		imports:[HttpClientTestingModule, RouterTestingModule],
		providers:[AuthGuardService]
	}));

	it('should be created', inject([AuthGuardService], (service:AuthGuardService) => {
		expect(service).toBeTruthy();
	}));

	it('should have a canActivate method', inject([AuthGuardService], (service: AuthGuardService)=>{
		expect(service.canActivate).toBeTruthy();
	}))
});

import { TestBed } from '@angular/core/testing';

import { CustomerprofileServiceService } from './customerprofile-service.service';

describe('CustomerprofileServiceService', () => {
  let service: CustomerprofileServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomerprofileServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

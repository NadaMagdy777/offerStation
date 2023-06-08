import { TestBed } from '@angular/core/testing';

import { OwnerCategoryServiceService } from './owner-category-service.service';

describe('OwnerCategoryServiceService', () => {
  let service: OwnerCategoryServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OwnerCategoryServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

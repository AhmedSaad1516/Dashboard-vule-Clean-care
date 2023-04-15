import { TestBed } from '@angular/core/testing';

import { AllCompanyServicesService } from './all-company-services.service';

describe('AllCompanyServicesService', () => {
  let service: AllCompanyServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AllCompanyServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

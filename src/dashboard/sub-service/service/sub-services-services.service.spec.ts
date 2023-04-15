import { TestBed } from '@angular/core/testing';

import { SubServicesServicesService } from './sub-services-services.service';

describe('SubServicesServicesService', () => {
  let service: SubServicesServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SubServicesServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

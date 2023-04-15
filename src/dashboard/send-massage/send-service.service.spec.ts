import { TestBed } from '@angular/core/testing';

import { SendServiceService } from './send-service.service';

describe('SendServiceService', () => {
  let service: SendServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SendServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

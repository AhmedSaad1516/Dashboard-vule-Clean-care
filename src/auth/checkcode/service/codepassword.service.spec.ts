import { TestBed } from '@angular/core/testing';

import { CodepasswordService } from './codepassword.service';

describe('CodepasswordService', () => {
  let service: CodepasswordService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CodepasswordService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

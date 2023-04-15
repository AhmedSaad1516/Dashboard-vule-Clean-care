import { TestBed } from '@angular/core/testing';

import { AnnouncementServieService } from './announcement-servie.service';

describe('AnnouncementServieService', () => {
  let service: AnnouncementServieService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AnnouncementServieService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { ShowlastexpensesService } from './showlastexpenses.service';

describe('ShowlastexpensesService', () => {
  let service: ShowlastexpensesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShowlastexpensesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

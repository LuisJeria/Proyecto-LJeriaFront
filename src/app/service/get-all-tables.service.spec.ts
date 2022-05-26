import { TestBed } from '@angular/core/testing';

import { GetAllTablesService } from './get-all-tables.service';

describe('GetAllTablesService', () => {
  let service: GetAllTablesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetAllTablesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

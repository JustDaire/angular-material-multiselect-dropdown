import { TestBed } from '@angular/core/testing';

import { NgxMatMultiSelectDropdownService } from './ngx-mat-multi-select-dropdown.service';

describe('NgxMatMultiSelectDropdownService', () => {
  let service: NgxMatMultiSelectDropdownService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxMatMultiSelectDropdownService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

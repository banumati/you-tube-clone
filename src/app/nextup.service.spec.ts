import { TestBed } from '@angular/core/testing';

import { NextupService } from './nextup.service';

describe('NextupService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NextupService = TestBed.get(NextupService);
    expect(service).toBeTruthy();
  });
});

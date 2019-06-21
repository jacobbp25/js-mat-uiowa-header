import { TestBed } from '@angular/core/testing';

import { UiowaHeaderMatService } from './uiowa-header-mat.service';

describe('UiowaHeaderMatService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UiowaHeaderMatService = TestBed.get(UiowaHeaderMatService);
    expect(service).toBeTruthy();
  });
});

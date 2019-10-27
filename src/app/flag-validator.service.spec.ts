import { TestBed } from '@angular/core/testing';

import { FlagValidatorService } from './flag-validator.service';

describe('FlagValidatorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FlagValidatorService = TestBed.get(FlagValidatorService);
    expect(service).toBeTruthy();
  });
});

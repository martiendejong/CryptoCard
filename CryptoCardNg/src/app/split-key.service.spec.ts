import { TestBed } from '@angular/core/testing';

import { SplitKeyService } from './split-key.service';

describe('SplitKeyService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SplitKeyService = TestBed.get(SplitKeyService);
    expect(service).toBeTruthy();
  });
});

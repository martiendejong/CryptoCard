import { TestBed } from '@angular/core/testing';

import { StoredKeyService } from './stored-key.service';

describe('StoredKeyService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StoredKeyService = TestBed.get(StoredKeyService);
    expect(service).toBeTruthy();
  });
});

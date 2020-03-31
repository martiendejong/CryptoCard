import { TestBed } from '@angular/core/testing';

import { OpenWalletService } from './open-wallet.service';

describe('OpenWalletService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OpenWalletService = TestBed.get(OpenWalletService);
    expect(service).toBeTruthy();
  });
});

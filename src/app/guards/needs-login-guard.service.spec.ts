import { TestBed, inject } from '@angular/core/testing';

import { NeedsLoginGuardService } from './needs-login-guard.service';

describe('NeedsLoginGuardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NeedsLoginGuardService]
    });
  });

  it('should be created', inject([NeedsLoginGuardService], (service: NeedsLoginGuardService) => {
    expect(service).toBeTruthy();
  }));
});

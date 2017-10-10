import { TestBed, inject } from '@angular/core/testing';

import { WalmartApiService } from './walmart-api.service';

describe('WalmartApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WalmartApiService]
    });
  });

  it('should be created', inject([WalmartApiService], (service: WalmartApiService) => {
    expect(service).toBeTruthy();
  }));
});

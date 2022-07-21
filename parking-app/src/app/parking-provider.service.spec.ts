import { TestBed } from '@angular/core/testing';

import { ParkingProviderService } from './parking-provider.service';

describe('ParkingProviderService', () => {
  let service: ParkingProviderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ParkingProviderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { DireccionApiService } from './direccion-api.service';

describe('DireccionApiService', () => {
  let service: DireccionApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DireccionApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

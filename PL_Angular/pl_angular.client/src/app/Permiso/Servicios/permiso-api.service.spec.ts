import { TestBed } from '@angular/core/testing';

import { PermisoApiService } from './permiso-api.service';

describe('PermisoApiService', () => {
  let service: PermisoApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PermisoApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { NetworkService } from './network.service';

describe('PagesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NetworkService = TestBed.get(NetworkService);
    expect(service).toBeTruthy();
  });
});

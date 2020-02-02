import { TestBed } from '@angular/core/testing';

import { JsonExporterService } from './json-exporter.service';

describe('JsonExporterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: JsonExporterService = TestBed.get(JsonExporterService);
    expect(service).toBeTruthy();
  });
});

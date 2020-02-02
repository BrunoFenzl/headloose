import { TestBed } from '@angular/core/testing';

import { SchemaGeneratorService } from './schema-generator.service';

describe('SchemaGeneratorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SchemaGeneratorService = TestBed.get(SchemaGeneratorService);
    expect(service).toBeTruthy();
  });
});

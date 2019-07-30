import { TestBed } from '@angular/core/testing';

import { CadastroDataService } from './cadastro-data.service';

describe('CadastroDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CadastroDataService = TestBed.get(CadastroDataService);
    expect(service).toBeTruthy();
  });
});

import { TestBed, inject } from '@angular/core/testing';

import { UpdateFormMfgService } from './update-form-mfg.service';

describe('UpdateFormMfgService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UpdateFormMfgService]
    });
  });

  it('should be created', inject([UpdateFormMfgService], (service: UpdateFormMfgService) => {
    expect(service).toBeTruthy();
  }));
});

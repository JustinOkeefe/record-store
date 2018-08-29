import { TestBed, inject } from '@angular/core/testing';

import { UpdateFormQaService } from './update-form-qa.service';

describe('UpdateFormQaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UpdateFormQaService]
    });
  });

  it('should be created', inject([UpdateFormQaService], (service: UpdateFormQaService) => {
    expect(service).toBeTruthy();
  }));
});

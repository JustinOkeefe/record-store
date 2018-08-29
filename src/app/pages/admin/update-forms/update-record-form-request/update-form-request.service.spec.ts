import { TestBed, inject } from '@angular/core/testing';

import { UpdateFormRequestService } from './update-form-request.service';

describe('UpdateFormRequestService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UpdateFormRequestService]
    });
  });

  it('should be created', inject([UpdateFormRequestService], (service: UpdateFormRequestService) => {
    expect(service).toBeTruthy();
  }));
});

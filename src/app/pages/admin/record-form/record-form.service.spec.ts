import { TestBed, inject } from '@angular/core/testing';

import { RecordFormService } from './record-form.service';

describe('RecordFormService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RecordFormService]
    });
  });

  it('should be created', inject([RecordFormService], (service: RecordFormService) => {
    expect(service).toBeTruthy();
  }));
});

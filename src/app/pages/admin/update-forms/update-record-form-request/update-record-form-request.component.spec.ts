import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateRecordFormRequestComponent } from './update-record-form-request.component';

describe('UpdateRecordFormRequestComponent', () => {
  let component: UpdateRecordFormRequestComponent;
  let fixture: ComponentFixture<UpdateRecordFormRequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateRecordFormRequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateRecordFormRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateRecordFormMfgComponent } from './update-record-form-mfg.component';

describe('UpdateRecordFormMfgComponent', () => {
  let component: UpdateRecordFormMfgComponent;
  let fixture: ComponentFixture<UpdateRecordFormMfgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateRecordFormMfgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateRecordFormMfgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

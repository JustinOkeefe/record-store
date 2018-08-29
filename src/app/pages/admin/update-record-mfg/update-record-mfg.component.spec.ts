import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateRecordMfgComponent } from './update-record-mfg.component';

describe('UpdateRecordMfgComponent', () => {
  let component: UpdateRecordMfgComponent;
  let fixture: ComponentFixture<UpdateRecordMfgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateRecordMfgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateRecordMfgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

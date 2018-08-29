import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateRecordFormQaComponent } from './update-record-form-qa.component';

describe('UpdateRecordFormQaComponent', () => {
  let component: UpdateRecordFormQaComponent;
  let fixture: ComponentFixture<UpdateRecordFormQaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateRecordFormQaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateRecordFormQaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

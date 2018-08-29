import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateRecordQaComponent } from './update-record-qa.component';

describe('UpdateRecordQaComponent', () => {
  let component: UpdateRecordQaComponent;
  let fixture: ComponentFixture<UpdateRecordQaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateRecordQaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateRecordQaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

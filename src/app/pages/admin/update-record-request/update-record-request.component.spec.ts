import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateRecordRequestComponent } from './update-record-request.component';

describe('UpdateRecordRequestComponent', () => {
  let component: UpdateRecordRequestComponent;
  let fixture: ComponentFixture<UpdateRecordRequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateRecordRequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateRecordRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecordDetailQaComponent } from './record-detail-qa.component';

describe('RecordDetailQaComponent', () => {
  let component: RecordDetailQaComponent;
  let fixture: ComponentFixture<RecordDetailQaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecordDetailQaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecordDetailQaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

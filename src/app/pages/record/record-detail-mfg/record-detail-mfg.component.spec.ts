import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecordDetailMfgComponent } from './record-detail-mfg.component';

describe('RecordDetailMfgComponent', () => {
  let component: RecordDetailMfgComponent;
  let fixture: ComponentFixture<RecordDetailMfgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecordDetailMfgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecordDetailMfgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

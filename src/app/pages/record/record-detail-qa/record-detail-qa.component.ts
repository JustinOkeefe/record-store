import { Component, Input } from '@angular/core';
import { AuthService }      from './../../../auth/auth.service';
import { UtilsService }     from './../../../core/utils.service';
import { RecordModel }      from './../../../core/models/record.model';
import { RecordComponent }  from '../record.component';

@Component({
  selector: 'app-record-detail-qa',
  templateUrl: './record-detail-qa.component.html',
  styleUrls: ['./record-detail-qa.component.scss']
})
export class RecordDetailQaComponent {
  @Input() record: RecordModel;
  
    constructor(
      public utils: UtilsService,
      public auth: AuthService) { }
  
  }

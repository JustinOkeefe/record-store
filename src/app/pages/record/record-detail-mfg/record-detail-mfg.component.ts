import { Component, Input } from '@angular/core';
import { AuthService }      from './../../../auth/auth.service';
import { UtilsService }     from './../../../core/utils.service';
import { RecordModel }      from './../../../core/models/record.model';
import { RecordComponent }  from '../record.component';

@Component({
  selector: 'app-record-detail-mfg',
  templateUrl: './record-detail-mfg.component.html',
  styleUrls: ['./record-detail-mfg.component.scss']
})
export class RecordDetailMfgComponent {
  @Input() record: RecordModel;

  constructor(
    public utils: UtilsService,
    public auth: AuthService) { }

}

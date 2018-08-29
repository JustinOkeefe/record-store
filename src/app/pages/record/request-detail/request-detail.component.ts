import { Component, Input } from '@angular/core';
import { AuthService } from './../../../auth/auth.service';
import { UtilsService } from './../../../core/utils.service';
import { RecordModel } from './../../../core/models/record.model';
import { RecordComponent } from '../record.component';
@Component({
  selector: 'app-request-detail',
  templateUrl: './request-detail.component.html',
  styleUrls: ['./request-detail.component.scss']
})
export class RequestDetailComponent {
  @Input() record: RecordModel;

  constructor(
    public utils: UtilsService,
    public auth: AuthService
  ) { }

}

import { Component, OnInit, OnDestroy } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { AuthService } from './../../../auth/auth.service';
import { ApiService } from './../../../core/api.service';
import { UtilsService } from './../../../core/utils.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { RecordModel } from './../../../core/models/record.model';

@Component({
  selector: 'app-update-record-qa',
  templateUrl: './update-record-qa.component.html',
  styleUrls: ['./update-record-qa.component.scss']
})
export class UpdateRecordQaComponent implements OnInit {
  pageTitle = 'Edit Record, QA';
  routeSub: Subscription;
  eventSub: Subscription;
  record: RecordModel;
  loading: boolean;
  error: boolean;
  private _id: string;

  constructor(
    private route: ActivatedRoute,
    public auth: AuthService,
    private api: ApiService,
    public utils: UtilsService,
    private title: Title) { }

  ngOnInit() {
    this.title.setTitle(this.pageTitle);

    // Set event ID from route params and subscribe
    this.routeSub = this.route.params
      .subscribe(params => {
        this._id = params['id'];
        this._getRecord();
      });
  }

  private _getRecord() {
    this.loading = true;
    // GET event by ID
    this.eventSub = this.api
      .getRecordById$(this._id)
      .subscribe(
        res => {
          this.record = res;
          this.loading = false;
        },
        err => {
          console.error(err);
          this.loading = false;
          this.error = true;
        }
      );
  }

  ngOnDestroy() {
    this.routeSub.unsubscribe();
    this.eventSub.unsubscribe();
  }

}

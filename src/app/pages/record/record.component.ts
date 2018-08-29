import { Component, OnInit, OnDestroy } from '@angular/core';
import { Title }                        from '@angular/platform-browser';
import { ActivatedRoute }               from '@angular/router';

import { Subscription }                 from 'rxjs/Subscription';

import { AuthService }                  from './../../auth/auth.service';
import { ApiService }                   from './../../core/api.service';
import { UtilsService }                 from './../../core/utils.service';
import { RecordModel }                  from './../../core/models/record.model';

@Component({
  selector: 'app-record',
  templateUrl: './record.component.html',
  styleUrls: ['./record.component.scss']
})
export class RecordComponent implements OnInit, OnDestroy {
  pageTitle: string;
  id: string;
  routeSub: Subscription;
  tabSub: Subscription;
  recordSub: Subscription;
  record: RecordModel;
  loading: boolean;
  error: boolean;
  tab: string;


  constructor(
    private route: ActivatedRoute,
    public auth: AuthService,
    private api: ApiService,
    public utils: UtilsService,
    private title: Title) { }

  ngOnInit() {
    // Set record ID from route params and subscribe
    this.routeSub = this.route.params
      .subscribe(params => {
        this.id = params['id'];
        this._getRecord();
      });

    // Subscribe to query params to watch for tab changes
    this.tabSub = this.route.queryParams
      .subscribe(queryParams => {
        this.tab = queryParams['tab'] || 'request';
      });
  }

  private _getRecord() {
    this.loading = true;
    // GET record by ID
    this.recordSub = this.api
      .getRecordById$(this.id)
      .subscribe(
        res => {
          this.record = res;
          this._setPageTitle(this.record.issuanceNumber);
          this.loading = false;
        },
        err => {
          console.error(err);
          this.loading = false;
          this.error = true;
          this._setPageTitle('Record Details');
        }
      );
  }

  private _setPageTitle(title: string) {
    this.pageTitle = title;
    this.title.setTitle(title);
  }

  ngOnDestroy() {
    this.routeSub.unsubscribe();
    this.tabSub.unsubscribe();
    this.recordSub.unsubscribe();
  }

}
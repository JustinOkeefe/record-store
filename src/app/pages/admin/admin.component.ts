import { Component, OnInit, OnDestroy } from '@angular/core';
import { Title }                        from '@angular/platform-browser';

import { Subscription }                 from 'rxjs/Subscription';

import { ApiService }                   from './../../core/api.service';
import { UtilsService }                 from './../../core/utils.service';
import { FilterSortService }            from './../../core/filter-sort.service';
import { RecordModel }                  from './../../core/models/record.model'
import { AuthService }                  from './../../auth/auth.service';
import { MatIconModule }                from '@angular/material/icon';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit, OnDestroy {
  pageTitle = 'Admin Records';
  recordListSub: Subscription;
  recordList: RecordModel[];
  filteredRecords: RecordModel[];
  loading: boolean;
  error: boolean;
  query: '';
  
    constructor(
      private title: Title,
      private auth: AuthService,
      public utils: UtilsService,
      private api: ApiService,
      public fs: FilterSortService) { }
  
    ngOnInit() {
      this.title.setTitle(this.pageTitle);
      this._getRecordList();
    }

    private _getRecordList() {
      this.loading = true;

      this.recordListSub = this.api
        .getAllRecords$()
        .subscribe(
          res => {
            this.recordList = res;
            this.filteredRecords = res;
            this.loading = false;
          },
          err => {
            console.error(err);
            this.loading = false;
            this.error = true
          }
        );
    }

    searchRecords() {
      this.filteredRecords = this.fs.search(this.recordList, this.query, '_id', 'mediumDate');
    }

    resetQuery() {
      this.query = '';
      this.filteredRecords = this.recordList;
    }

    ngOnDestroy() {
      this.recordListSub.unsubscribe();
    }
  
  }

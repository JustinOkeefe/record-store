import { Component, OnInit, OnDestroy } from '@angular/core';
import { Title }                        from '@angular/platform-browser';

import { Subscription }                 from 'rxjs/Subscription';

import { ApiService }                   from './../../core/api.service';
import { UtilsService }                 from './../../core/utils.service';
import { FilterSortService }            from './../../core/filter-sort.service';
import { RecordModel }                  from './../../core/models/record.model'

@Component({
  selector: 'app-quality',
  templateUrl: './quality.component.html',
  styleUrls: ['./quality.component.scss']
})
export class QualityComponent implements OnInit {
  pageTitle = 'Records Pending QA Review';
  recordListSub: Subscription;
  recordList: RecordModel[];
  filteredRecords: RecordModel[];
  loading: boolean;
  error: boolean;
  query: '';
  
    constructor(private title: Title,
      public utils: UtilsService,
      private api: ApiService,
      public fs: FilterSortService) { }
  
    ngOnInit() {
      this.title.setTitle(this.pageTitle);
      this._getExecutedList();
    }

    private _getExecutedList() {
      this.loading = true;

      this.recordListSub = this.api
        .getAllExecuted$()
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



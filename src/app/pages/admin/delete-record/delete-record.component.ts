import { Component, OnDestroy, Input } from '@angular/core';
import { RecordModel } from './../../../core/models/record.model';
import { Subscription } from 'rxjs/Subscription';
import { ApiService } from './../../../core/api.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-delete-record',
  templateUrl: './delete-record.component.html',
  styleUrls: ['./delete-record.component.scss']
})
export class DeleteRecordComponent implements OnDestroy {
  //@Input() record: RecordModel;
  record: RecordModel;
  routeSub: Subscription;
  recordSub: Subscription;
  confirmDelete: string;
  deleteSub: Subscription;
  submitting: boolean;
  error: boolean;
  private _id: string;
  loading: boolean;


  constructor(
    private api: ApiService,
    private router: Router,
    private route: ActivatedRoute, 
  ) { }

  ngOnInit() {
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
    this.recordSub = this.api
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

  removeRecord() {
    this.submitting = true;
    // DELETE event by ID
    this.deleteSub = this.api
      .deleteRecord$(this.record._id)
      .subscribe(
        res => {
          this.submitting = false;
          this.error = false;
          console.log(res.message);
          // If successfully deleted record, redirect to Admin
          this.router.navigate(['/admin']);
        },
        err => {
          console.error(err);
          this.submitting = false;
          this.error = true;
        }
      );
  }

  ngOnDestroy() {
    if (this.deleteSub) {
      this.deleteSub.unsubscribe();
      this.routeSub.unsubscribe();
      this.recordSub.unsubscribe();
    }
  }

}
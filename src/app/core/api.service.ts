import { Injectable }                                 from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { AuthService }                                from './../auth/auth.service';
import { Observable }                                 from 'rxjs/Observable';
import { ENV } from './env.config';

import 'rxjs/add/operator/catch';

import { RecordModel } from './models/record.model';
//import { RequestModel } from './models/request.model';

@Injectable()
export class ApiService {

  constructor(
    private http: HttpClient,
    private auth: AuthService) { }

  private get _authHeader(): string {
    return `Bearer ${localStorage.getItem('access_token')}`;
  }

  //GET all records
  getAllRecords$(): Observable<RecordModel[]> {
    return this.http
      .get(`${ENV.BASE_API}records`, {
        headers: new HttpHeaders().set('Authorization', this._authHeader)
      })
      .catch(this._handleError);
  }

  //GET record by Id
  getRecordById$(id: string): Observable<RecordModel> {
    return this.http
      .get(`${ENV.BASE_API}record/${id}`, {
        headers: new HttpHeaders().set('Authorization', this._authHeader)
      })
      .catch(this._handleError);
  }

  // POST new record (admin only)
  postRecord$(record: RecordModel): Observable<RecordModel> {
    return this.http
      .post(`${ENV.BASE_API}record/new`, record, {
        headers: new HttpHeaders().set('Authorization', this._authHeader)
      })
      .catch(this._handleError);
  }

  // PUT existing record (admin only)
  editRecord$(id: string, record: RecordModel): Observable<RecordModel> {
    return this.http
      .put(`${ENV.BASE_API}record/${id}`, record, {
        headers: new HttpHeaders().set('Authorization', this._authHeader)
      })
      .catch(this._handleError);
  }

  // DELETE existing record (admin only)
  deleteRecord$(id: string): Observable<any> {
    return this.http
      .delete(`${ENV.BASE_API}record/${id}`, {
        headers: new HttpHeaders().set('Authorization', this._authHeader)
      })
      .catch(this._handleError);
  }

  //GET all requests
  getAllRequests$(): Observable<RecordModel[]> {
    return this.http
      .get(`${ENV.BASE_API}requests`, {
        headers: new HttpHeaders().set('Authorization', this._authHeader)
      })
      .catch(this._handleError);
  }

  //GET all issued
  getAllIssued$(): Observable<RecordModel[]> {
    return this.http
      .get(`${ENV.BASE_API}manufacturing`, {
        headers: new HttpHeaders().set('Authorization', this._authHeader)
      })
      .catch(this._handleError);
  }

  //GET all executed
  getAllExecuted$(): Observable<RecordModel[]> {
    return this.http
      .get(`${ENV.BASE_API}quality`, {
        headers: new HttpHeaders().set('Authorization', this._authHeader)
      })
      .catch(this._handleError);
  }

  private _handleError(err: HttpErrorResponse | any) {
    const errorMsg = err.message || 'Error: Unable to complete request.';
    if (err.message && err.message.indexOf('No JWT present') > -1) {
      this.auth.login();
    }
    return Observable.throw(errorMsg);
  }

}

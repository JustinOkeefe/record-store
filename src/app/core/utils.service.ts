import { Injectable } from '@angular/core';
import { DatePipe }   from '@angular/common';

@Injectable()
export class UtilsService {

  constructor(private datePipe: DatePipe) { }

  isLoaded(loading: boolean): boolean {
    return loading === false;
  }

  issuedDate(issuanceDate): string {
    const _issuedDate = this.datePipe.transform(issuanceDate, 'mediumDate');
    //const endDate = this.datePipe.transform(end, 'mediumDate');
    console.log(_issuedDate);
      return _issuedDate;
  }

  tabIs(currentTab: string, tab: string): boolean {
    return currentTab === tab;
  }

  booleanToText(bool: boolean): string {
    return bool ? 'Yes' : 'No';
  }

}
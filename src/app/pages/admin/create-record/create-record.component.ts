import { Component, OnInit } from '@angular/core';
import { Title }             from '@angular/platform-browser';

@Component({
  selector: 'app-create-record',
  templateUrl: './create-record.component.html',
  styleUrls: ['./create-record.component.scss']
})
export class CreateRecordComponent implements OnInit {
  pageTitle = 'Record Request Form';
  
    constructor(private title: Title) { }
  
    ngOnInit() {
      this.title.setTitle(this.pageTitle);
    }
  
  }
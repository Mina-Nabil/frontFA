import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ss-table',
  templateUrl: './ss-table.component.html',
  styleUrls: ['./ss-table.component.scss']
})
export class SsTableComponent implements OnInit {

  classID: number;
  rows = [];
  temp = [];
  selected: any[] = [];
  columns = [{
    name: 'Date',  prop: 'SESS_STRT_DATE', width: '200'
  },{
    name: 'Description', prop: 'SESS_DESC', width: '200'
  },{
    name: 'Mentor Name',  prop: 'USER_UNAME', width: '200'
  },{
    name: 'Duration',  prop: 'SESS_DUR', width: '200'
  }];

  constructor() { }

  ngOnInit() {
  }

}

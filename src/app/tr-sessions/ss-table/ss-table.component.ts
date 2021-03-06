import { Component, OnInit } from '@angular/core';
import { SessionsService } from '../../resources/sessions.service';
import { ActivatedRoute } from '@angular/router';
import { Params } from '@angular/router';

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
    name: 'Start Date',  prop: 'SESS_STRT_DATE', width: '200'
  },{
    name: 'Description', prop: 'SESS_DESC', width: '200'
  },{
    name: 'Mentor Name',  prop: 'USER_UNAME', width: '200'
  },{
    name: 'Duration',  prop: 'SESS_DUR', width: '200'
  }];

  constructor(private _sessionService : SessionsService, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe((params: Params) => {

      this.classID = params['ClassID'];
      if(this.classID){
        this._sessionService.getSessions(this.classID).subscribe(data => {
          this.temp = [...data];
          this.rows = data;
        })
      }
    });

   }

  ngOnInit() {
  }

  updateFilter(event) {
  const val = event.target.value.toLowerCase();
  // filter our data
  const temp = this.temp.filter(function(d) {
    return d.SESS_DESC.toLowerCase().indexOf(val) !== -1 || !val;
  });
  // update the rows
  this.rows = temp;
  }

  goToAttendance(event){
      window.location.href = 'trsessions/attendance/' + event.selected[0].SSCL_SESS_ID;
  }

}

import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

import { ISession , IAttendance} from '../../resources/interfaces';

import { ActivatedRoute, Params } from '@angular/router';
import { SessionsService } from '../../resources/sessions.service';



@Component({
  selector: 'app-ss-attendance',
  templateUrl: './ss-attendance.component.html',
  styleUrls: ['./ss-attendance.component.scss']
})
export class SsAttendanceComponent implements OnInit {

  _sessionID : number;
  _sessionObj : ISession = {
        SESS_ID : null,
        SESS_DESC : null,
        SESS_USER_ID : null,
        SESS_END_DATE : null,
        SESS_STRT_DATE : null
      };

  //Table Objects
  rows = [];
  temp = [];
  selected: any[] = [];
  columns = [{
    name: 'Student', prop: 'STUD_NAME', width: '300'
  }, {
    name: 'Class', prop: 'CLSS_NME', width: '300'
  }, {
    name: 'Attended', prop: 'ATTND', width: '300'

  }]



  constructor(private _activatedRoute : ActivatedRoute, private _sessionService : SessionsService, private _location: Location) {
    this._activatedRoute.params.subscribe((params : Params) => {
      this._sessionID = params['SessID'];
      this._sessionService.getSession(this._sessionID).subscribe(data =>this._sessionObj = data);
      this._sessionService.getAttendanceList(this._sessionID).subscribe(data =>{
        this.temp = [...data];
        this.rows = data;
      });

    })

  }

  ngOnInit() {
  }

  initiateDelete(){
    if(confirm("Are you sure you want to delete this Session?")){
      this._sessionService.deleteSession(this._sessionID).subscribe();
      this._location.back();
    }
  }

  changeAttendance(event){
    if(confirm("Are you sure you want to modify this Attendance Record?")){
      if(event.selected[0].ATTND == 0) {
        this._sessionService.takeAttendance(event.selected[0].SESS_ID, event.selected[0].STUD_ID).subscribe(data =>{
          this.rows = data;
        });
      } else if (event.selected[0].ATTND == 1){
        this._sessionService.cancelAttendance(event.selected[0].SESS_ID, event.selected[0].STUD_ID).subscribe(data =>{
          this.rows = data;
        });

      }
    }
  }

  updateFilter(event) {
  const val = event.target.value.toLowerCase();
  // filter our data
  const temp = this.temp.filter(function(d) {
    return d.STUD_NAME.toLowerCase().indexOf(val) !== -1 || !val;
  });
  // update the rows
  this.rows = temp;
  }

}

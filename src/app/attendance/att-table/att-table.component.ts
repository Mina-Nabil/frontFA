import { Component, OnInit } from '@angular/core';

import { AttendanceService } from '../../resources/attendance.service';
import { ActivatedRoute, Params } from '@angular/router';

import { ISessionNames, IClassAttendance } from '../../resources/interfaces';


@Component({
  selector: 'app-att-table',
  templateUrl: './att-table.component.html',
  styleUrls: ['./att-table.component.scss']
})
export class AttTableComponent implements OnInit {

  dataRows = [];
  temp: any[] = [];
  temp2: any[] = [];
  columnArray: ISessionNames[] = [];
  classID: number;

  constructor(private _attendanceService : AttendanceService, private activatedRoute: ActivatedRoute) {

    this.activatedRoute.params.subscribe((params: Params) => {
    this.classID = params['classID'];
    if(this.classID){
      this._attendanceService.getSessionsForAttendance(this.classID).subscribe(data => {
        this.temp = [...data];
        this.columnArray = data;
      });
      this._attendanceService.getAttendance(this.classID).subscribe(data => {
        this.temp2 = [...data];
        this.dataRows = data;
      });


    }
  })
}

  updateFilter(event) {
  const val = event.target.value.toLowerCase();
  // filter our data
  const temp = this.temp.filter(function(d) {
    return d.STUD_NAME.toLowerCase().indexOf(val) !== -1 || !val;
  });
  // update the rows
  this.dataRows = temp;
  }

  ngOnInit() {
  }

}

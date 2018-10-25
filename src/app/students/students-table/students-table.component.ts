import { Component, OnInit } from '@angular/core';
import { StudentsService } from '../../resources/students.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-students-table',
  templateUrl: './students-table.component.html',
  styleUrls: ['./students-table.component.scss']
})
export class StudentsTableComponent implements OnInit {

  classID: number;
  rows = [];
  temp = [];
  selected: any[] = [];
  columns = [{
    name: 'ID',  prop: 'STUD_CSID', width: '100'
  },{
    name: 'Name', prop: 'STUD_NAME', width: '300'
  },{
    name: 'BirthDate',  prop: 'STUD_BD', width: '300'
  },{
    name: 'Class',  prop: 'STUD_CLSS_NME', width: '100'
  },{
    name: 'Parent Tel#',  prop: 'STUD_PRNT_TEL', width: '200'
  }];

  constructor(private _studentsService : StudentsService, private activatedRoute: ActivatedRoute) {

      this.activatedRoute.params.subscribe((params: Params) => {
      this.classID = params['ClassID'];
      if(this.classID){
        this._studentsService.getStudents(this.classID).subscribe(data => {
          this.temp = [...data];
          this.rows = data;
        });
      } else if(this.classID == null){
        this._studentsService.getAllStudents().subscribe(data => {
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
    return d.STUD_NAME.toLowerCase().indexOf(val) !== -1 || !val;
  });
  // update the rows
  this.rows = temp;
  }

  onSelect(event) {
    window.location.href = 'students/profile/' + event.selected[0].STUD_ID;
  }

  onActivate(event){}

}

import { Component, OnInit } from '@angular/core';
import { StudentsService } from '../../resources/students.service';

@Component({
  selector: 'app-students-subscription',
  templateUrl: './students-subscription.component.html',
  styleUrls: ['./students-subscription.component.scss']
})
export class StudentsSubscriptionComponent implements OnInit {

  classID: number;
  rows = [];
  temp = [];
  selected: any[] = [];
  columns = [{
    name: 'ID',  prop: 'STUD_CSID', width: '100'
  },{
    name: 'Name', prop: 'STUD_NAME', width: '400'
  },{
    name: 'Months Due',  prop: 'Months', width: '100'
  }];

  constructor(private _studentService : StudentsService) {
    this._studentService.getAllUnsubscribers().subscribe(data => {
      this.temp = [...data];
      this.rows = data;
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
      if(confirm("You are about to save that " + event.selected[0].STUD_NAME + " paid a month. Do you confirm?")){
        this._studentService.subscribeStudent(event.selected[0].STUD_ID).subscribe(data => {
          this.temp = [...data];
          this.rows = data;
        });
      }
    }

    onActivate(event) {}


}

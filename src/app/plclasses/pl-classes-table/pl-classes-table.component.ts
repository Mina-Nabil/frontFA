import { Component, OnInit } from '@angular/core';
import { ClassService } from '../../resources/class.service';


@Component({
  selector: 'app-pl-classes-table',
  templateUrl: './pl-classes-table.component.html',
  styleUrls: ['./pl-classes-table.component.scss']
})
export class PlClassesTableComponent implements OnInit {

  rows = [];
  temp = [];
  selected: any[] = [];
  columns = [{
    name: 'ID',   prop: 'CLSS_ID', width:'20'
  },{
    name: 'Name', prop: 'CLSS_NME', width: '200'
  },{
    name: 'Description',  prop: 'CLSS_DESC', width: '500'
  },{
    name: 'Year', prop: 'CLSS_YEAR', width: '180'
  }];

  constructor(private _classService : ClassService) {
    this._classService.getClasses().subscribe(data => {
      this.temp = [...data];
      this.rows = data;
    })
  }

  ngOnInit() {
  }

  updateFilter(event) {
  const val = event.target.value.toLowerCase();
  // filter our data
  const temp = this.temp.filter(function(d) {
    return d.CLSS_NME.toLowerCase().indexOf(val) !== -1 || !val;
  });
  // update the rows
  this.rows = temp;
}

  onSelect(event) {
    window.location.href = 'classes/edit/' + event.selected[0].CLSS_ID;
  }

  onActivate(event){}

}

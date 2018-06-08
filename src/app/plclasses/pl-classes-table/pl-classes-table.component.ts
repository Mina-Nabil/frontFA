import { Component, OnInit } from '@angular/core';
import { ClassService } from '../../class.service';


@Component({
  selector: 'app-pl-classes-table',
  templateUrl: './pl-classes-table.component.html',
  styleUrls: ['./pl-classes-table.component.scss']
})
export class PlClassesTableComponent implements OnInit {

  rows = [];


  constructor(private _classService : ClassService) {
    this._classService.getClasses().subscribe(data => this.rows = data)
  }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IStudent } from '../../resources/interfaces';
import { ActivatedRoute, Params } from '@angular/router';
import { StudentsService } from '../../resources/students.service';

@Component({
  selector: 'app-student-profile',
  templateUrl: './student-profile.component.html',
  styleUrls: ['./student-profile.component.scss']
})
export class StudentProfileComponent implements OnInit {


  public studentObj: IStudent = {
        STUD_ID: null,
        STUD_NAME: null,
        STUD_BD: null,
        STUD_TEL: null,
        STUD_WGHT: null,
        STUD_LGTH: null,
        STUD_ACCS_CODE: null,
        STUD_SINCE: null,
        STUD_FAV_POS: null,
        STUD_CLSS_ID: null,
        STUD_PRNT_TEL: null,
        STUD_MNTR_NAME: null,
        STUD_PREV_CLUB: null,
        STUD_BARCODE: null,
        STUD_PRNT_NAME: null,
        STUD_PRNT_TELL: null,
        POST_NAME: null,
        POST_ABB: null,
        CLSS_YEAR: null
      };
  age: number;
  editLink: string;

  globalChartOptions: any = {
  responsive: true,
  legend: {
    display: true,
    position: 'bottom'
  }
};

  // Bar
  barChartLabels: string[] = ['Week1', 'Week2', 'Week3', 'Week4 - EOM'];
  barChartType = 'bar';
  barChartLegend = true;
  barChartData: any[] = [{
    data: [6, 8, 30, 25],
    label: 'Week Hours',
    borderWidth: 0
  }, {
    data: [5, 4, 4, 2],
    label: 'Attended Hours',
    borderWidth: 0
  }];
  barChartOptions: any = Object.assign({
    scaleShowVerticalLines: true,
    tooltips: {
      mode: 'index',
      intersect: false
    },
    responsive: true,
    scales: {
      xAxes: [{
        gridLines: {
          color: 'rgba(0,0,0,0.02)',
          defaultFontColor: 'rgba(0,0,0,0.02)',
          zeroLineColor: 'rgba(0,0,0,0.02)'
        },
        stacked: false,
        ticks: {
          beginAtZero: true
        }
      }],
      yAxes: [{
        gridLines: {
          color: 'rgba(0,0,0,0.02)',
           defaultFontColor: 'rgba(0,0,0,0.02)',
          zeroLineColor: 'rgba(0,0,0,0.02)'
        },
        stacked: false,
        ticks: {
          beginAtZero: true
        }
      }]
    }
  }, this.globalChartOptions);

  constructor(private activatedRoute : ActivatedRoute, private studentService: StudentsService) {
    this.activatedRoute.params.subscribe((params : Params) => {
      this.studentService.getStudent(params['StudentID']).subscribe(data => {
        this.studentObj = data;
        let month = new Date(Date.now()).getMonth() - new Date(this.studentObj.STUD_BD).getMonth();
        if(month > 0){
          this.age = new Date(Date.now()).getFullYear() - new Date(this.studentObj.STUD_BD).getFullYear();

        }
          else if (month < 0){
            this.age = new Date(Date.now()).getFullYear() - new Date(this.studentObj.STUD_BD).getFullYear() - 1 ;

          }
          else{
            let day = new Date(Date.now()).getDay() - new Date(this.studentObj.STUD_BD).getDay();
            if(day >= 0){
              this.age = new Date(Date.now()).getFullYear() - new Date(this.studentObj.STUD_BD).getFullYear();

            }
            else if (day < 0){
              this.age = new Date(Date.now()).getFullYear() - new Date(this.studentObj.STUD_BD).getFullYear() - 1;

            }

          }
          this.editLink = "/students/edit/" + this.studentObj.STUD_ID;
      });

      }
    );

   }

  ngOnInit() {

  }

}

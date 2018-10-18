import { Component, OnInit } from '@angular/core';
import { CommonModule, Time } from '@angular/common';
import { IStudent, IStudentChart } from '../../resources/interfaces';
import { ActivatedRoute, Params } from '@angular/router';
import { StudentsService } from '../../resources/students.service';
import { SessionsService } from '../../resources/sessions.service';

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
        CLSS_YEAR: null,
        STUD_CLSS_NAME: null
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

  public chart1Obj: IStudentChart = {
    Duration_A: 0,
    Duration_T: 0,
    Attended: null,
    Available: null
  }

  public chart2Obj: IStudentChart = {
    Duration_A: 0,
    Duration_T: 0,
    Attended: null,
    Available: null
  }

  public chart3Obj: IStudentChart = {
    Duration_A: 0,
    Duration_T: 0,
    Attended: null,
    Available: null
  }

  public chart4Obj: IStudentChart = {
    Duration_A: 0,
    Duration_T: 0,
    Attended: null,
    Available: null
  }

  // Bar
  barChartLabels: string[] = ['Week1', 'Week2', 'Week3', 'Week4 - EOM'];
  barChartType = 'bar';
  barChartLegend = true;

  barChart1Data: any[] = [{
    data: null,
    label: 'Total Minutes',
    borderWidth: 0
  }, {
    data: null,
    label: 'Attended Minutes',
    borderWidth: 0
  }];

  barChart2Data: any[] = [{
    data: null,
    label: 'Total Minutes',
    borderWidth: 0
  }, {
    data: null,
    label: 'Attended Minutes',
    borderWidth: 0
  }];

  barChart3Data: any[] = [{
    data: null,
    label: 'Total Minutes',
    borderWidth: 0
  }, {
    data: null,
    label: 'Attended Minutes',
    borderWidth: 0
  }];

  barChart4Data: any[] = [{
    data: null,
    label: 'Total Minutes',
    borderWidth: 0
  }, {
    data: null,
    label: 'Attended Minutes',
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

  constructor(private activatedRoute : ActivatedRoute, private studentService: StudentsService, private sessionservice: SessionsService) {
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
          let today = new Date();
          let thisMonth = today.getUTCMonth() + 1;
          let thisYear = today.getUTCFullYear();
          this.sessionservice.getAttendanceChart(this.studentObj.STUD_ID, thisMonth, thisYear).subscribe(
            data => {
              this.chart1Obj = data
              this.barChart1Data[0]['data'] = this.chart1Obj.Available;
              this.barChart1Data[1]['data'] = this.chart1Obj.Attended;

            }
          );

          thisMonth = thisMonth - 1;
          if(thisMonth == 0){
            thisMonth = 12;
            thisYear = thisYear - 1;
          }
          this.sessionservice.getAttendanceChart(this.studentObj.STUD_ID, thisMonth, thisYear).subscribe(
            data => {
              this.chart2Obj = data
              this.barChart2Data[0]['data'] = this.chart2Obj.Available;
              this.barChart2Data[1]['data'] = this.chart2Obj.Attended;
            }
          );

          thisMonth = thisMonth - 1;
          if(thisMonth == 0){
            thisMonth = 12;
            thisYear = thisYear - 1;
          }
          this.sessionservice.getAttendanceChart(this.studentObj.STUD_ID, thisMonth, thisYear).subscribe(
            data => {
              this.chart3Obj = data
              this.barChart3Data[0]['data'] = this.chart3Obj.Available;
              this.barChart3Data[1]['data'] = this.chart3Obj.Attended;

            }
          );

          thisMonth = thisMonth - 1;
          if(thisMonth == 0){
            thisMonth = 12;
            thisYear = thisYear - 1;
          }
          this.sessionservice.getAttendanceChart(this.studentObj.STUD_ID, thisMonth, thisYear).subscribe(
            data => {
              this.chart4Obj = data
              this.barChart4Data[0]['data'] = this.chart4Obj.Available;
              this.barChart4Data[1]['data'] = this.chart4Obj.Attended;
            }
          );
      });
      }
    );

   }

  ngOnInit() {

  }

}

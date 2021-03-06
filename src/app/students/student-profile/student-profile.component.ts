import { Component, OnInit } from '@angular/core';
import { CommonModule, Time } from '@angular/common';
import { IStudent, IStudentChart, IPayment, IAttendance } from '../../resources/interfaces';
import { ActivatedRoute, Params } from '@angular/router';
import { StudentsService } from '../../resources/students.service';
import { SessionsService } from '../../resources/sessions.service';
import { PaymentsService } from '../../resources/payments.service';
import { AttendanceService } from '../../resources/attendance.service';

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
        STUD_CLSS_NME: null,
        STUD_CSID: null,
        STUD_ACTV: null
      };

  public attendanceRows =[];

  public attendanceColumns = [{
    name: 'Name', prop: 'SESS_DESC', width: '300'
  }, {
    name: 'Date', prop: 'SESS_STRT_DATE', width: '300'
  }, {
    name: 'Attended', prop: 'ATTND', width: '300'

  }];

  public paymentRows = [];

  public paymentColumns = [{
    name: 'Student Name', prop: 'STUD_NAME', width: '120'
  },{
    name: 'Payment',   prop: 'PYMT_NAME', width:'120'
  },{
    name: 'Amount',   prop: 'PYMT_AMNT', width:'120'
  },{
    name: 'Date',  prop: 'PYMT_DATE', width: '200'
  }];

  age: number;
  editLink: string;
  ifActive: boolean;



  constructor(private activatedRoute : ActivatedRoute, private studentService: StudentsService, private sessionservice: SessionsService, private _paymentService: PaymentsService, private _attendanceService: AttendanceService) {
    this.activatedRoute.params.subscribe((params : Params) => {
      this.studentService.getStudent(params['StudentID']).subscribe(data => {
        this.studentObj = data;

        this.ifActive = (this.studentObj.STUD_ACTV == 1);

        //Kid Age
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

          //Payments and Attendance Tables
          this._paymentService.getStudentHistory(this.studentObj.STUD_ID).subscribe(data => {
          this.paymentRows = data;
        });
          this._attendanceService.getAttendanceforStudent(this.studentObj.STUD_ID).subscribe(data => {
          this.attendanceRows = data;
        });




          // //Charts Data
          // let today = new Date();
          // let thisMonth = today.getUTCMonth() + 1;
          // let thisYear = today.getUTCFullYear();

        //   for(let $i = 0 ; $i < 24 ; $i++){
        //   this.sessionservice.getAttendanceChart(this.studentObj.STUD_ID, thisMonth, thisYear).subscribe(
        //     data => {
        //
        //         this.barChartDataArr[$i] = [{
        //           data: null,
        //           label: 'Total Hours',
        //           borderWidth: 0
        //         }, {
        //           data: null,
        //           label: 'Attended Hours',
        //           borderWidth: 0
        //         }];
        //         this.barChartDataArr[$i][0]['data'] = data.Available;
        //         this.barChartDataArr[$i][1]['data'] = data.Attended;
        //         this.barChartDataArr[$i]['title']   = this.getMonthStr(thisMonth) + ' ' + thisYear;
        //         this.barChartDataArr[$i]['Duration_A']   = data.Duration_A;
        //         this.barChartDataArr[$i]['Duration_T']   = data.Duration_T;
        //         }
        //
        //   );
        //
        //   thisMonth = thisMonth - 1;
        //   if(thisMonth == 0){
        //     thisMonth = 12;
        //     thisYear = thisYear - 1;
        //   }
        //
        // }
        });


      });

      }


  ngOnInit() {

  }

  DeactivateStudent(){
    this.studentService.deactivateStudent(this.studentObj.STUD_ID).subscribe( data => {
          this.ifActive = (data.STUD_ACTV == 1);
    })
  }

  ActivateStudent(){
    this.studentService.activateStudent(this.studentObj.STUD_ID).subscribe( data => {
          this.ifActive = (data.STUD_ACTV == 1);
    })
  }

  getMonthStr(num: number){
    if(num == 1)return 'Jan';
    if(num == 2)return 'Feb';
    if(num == 3)return 'Mar';
    if(num == 4)return 'Apr';
    if(num == 5)return 'May';
    if(num == 6)return 'Jun';
    if(num == 7)return 'Jul';
    if(num == 8)return 'Aug';
    if(num == 9)return 'Sep';
    if(num == 10)return 'Oct';
    if(num == 11)return 'Nov';
    if(num == 12)return 'Dec';
  }

}

import { Component, OnInit } from '@angular/core';


import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { CustomValidators } from 'ng2-validation';

import { IStudent, IClass, IPayment } from '../../resources/interfaces';
import { StudentsService } from '../../resources/students.service';
import { ClassService } from '../../resources/class.service';
import { PaymentsService } from '../../resources/payments.service';

@Component({
  selector: 'app-payments-insert',
  templateUrl: './payments-insert.component.html',
  styleUrls: ['./payments-insert.component.scss']
})
export class PaymentsInsertComponent implements OnInit {

  public form: FormGroup;
  public classesObj: IClass[] ;
  public studentsObj: IStudent[] ;
  public paymentObj: IPayment =
  {  PYMT_ID: null,
    STUD_NAME : null,
    PYMT_NAME: null,
    PYMT_DATE: null,
    PYMT_AMNT: null,
    PYMT_STUD: null,
    PYMT_CLSS: null
  };
  public modifyFailed: boolean;
  public modifySuccess: boolean;
  public errorMsg: string ;
  public result: any;

  constructor(private fb: FormBuilder, private _studentsService :StudentsService, private _classService :ClassService,
              private _paymentService  :PaymentsService) {

            }

  ngOnInit() {
    this.form = this.fb.group({

    PaymentName :   [,Validators.compose([Validators.required])],
    Amount      :   [,Validators.compose([Validators.required])],
    Student     :   [,],
    clss        :   [,],

    });

    this._classService.getClasses().subscribe(data => this.classesObj = data);
    this._studentsService.getAllStudents().subscribe(data => this.studentsObj = data);

    this.form.controls['clss'].setValue(0);
    this.form.controls['Student'].setValue(0);

  }

  generatePayments(){
      this.paymentObj =
      {
        PYMT_ID: null,
        STUD_NAME : null,
        PYMT_NAME: this.form.controls['PaymentName'].value,
        PYMT_DATE: null,
        PYMT_AMNT: this.form.controls['Amount'].value,
        PYMT_STUD: this.form.controls['Student'].value,
        PYMT_CLSS: this.form.controls['clss'].value
    }

    this._paymentService.addPayment(this.paymentObj)
    .subscribe(data => {
                this.result = data;
                if(this.result.result != 1)
                this.declareError('Payments Generation Failed');
                else
                this.declareSuccess();
              },
               error => {
                 this.errorMsg = error;
                 this.modifyFailed = true;
                 this.modifySuccess = false;
               });
  }

  studentSelected(){
    this.form.controls['clss'].setValue(0);
  }

  classSelected(){
    this.form.controls['Student'].setValue(0);
  }


  declareError(errorMsg: string): any {
    this.errorMsg = errorMsg;
    this.modifyFailed = true;
    this.modifySuccess = false;
  }
  declareSuccess(): any {
    this.modifyFailed = false;
    this.modifySuccess = true;

  }

}

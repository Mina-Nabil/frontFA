import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { CustomValidators } from 'ng2-validation';

import { IClass } from '../../interfaces/class'
import { ClassService } from '../../class.service';

@Component({
  selector: 'app-pl-classes-edit',
  templateUrl: './pl-classes-edit.component.html',
  styleUrls: ['./pl-classes-edit.component.scss']
})

export class PlClassesEditComponent implements OnInit {


  public form: FormGroup;
  public classObj: IClass;
  public isEdit: boolean;
  public modifyFailed: boolean;
  public modifySuccess: boolean;
  public errorMsg: string ;
  public newclassObj: IClass;

  constructor(private fb: FormBuilder, private _classService: ClassService) {
    this.modifyFailed = false;
   }

  ngOnInit() {

    this.form = this.fb.group({
      ID: [],
      Name: [null, Validators.compose([Validators.required, Validators.minLength(2), Validators.maxLength(20)])],
      Description: [null, Validators.compose([Validators.required])],
      Year: [null, Validators.compose([Validators.required, CustomValidators.range([1998, 2100])])],
    });
  }

  modifyStudent(){
    this.classObj = {
      CLSS_NAME: this.form.controls['Name'].value,
      CLSS_ID: this.form.controls['ID'].value,
      CLSS_DESC: this.form.controls['Description'].value,
      CLSS_YEAR: this.form.controls['Year'].value,
    }
    this._classService.addClass(this.classObj).subscribe(data => {
                                                          this.newclassObj = data;
                                                          if(this.newclassObj.CLSS_NAME != this.classObj.CLSS_NAME)
                                                          this.declareError();
                                                          else
                                                          this.declareSuccess();
                                                        },
                                                         error => {
                                                           this.errorMsg = error;
                                                           this.modifyFailed = true;
                                                           this.modifySuccess = false;
                                                         });

  }

  declareError(): any {
    this.errorMsg = 'Mismatch Error'
    this.modifyFailed = true;
    this.modifySuccess = false;
  }
  declareSuccess(): any {
    this.modifyFailed = false;
    this.modifySuccess = true;

  }
}

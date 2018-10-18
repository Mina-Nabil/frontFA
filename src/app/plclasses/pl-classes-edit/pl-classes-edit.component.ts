import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { CustomValidators } from 'ng2-validation';

import { IClass } from '../../resources/interfaces'
import { ClassService } from '../../resources/class.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-pl-classes-edit',
  templateUrl: './pl-classes-edit.component.html',
  styleUrls: ['./pl-classes-edit.component.scss']
})

export class PlClassesEditComponent implements OnInit {


  public form: FormGroup;
  public classObj: IClass = {
        CLSS_NAME: null,
        CLSS_ID: null,
        CLSS_DESC: null,
        CLSS_YEAR: null
      };
  public isEdit: boolean;
  public modifyFailed: boolean;
  public modifySuccess: boolean;
  public errorMsg: string ;
  public newclassObj: IClass;

  constructor(private fb: FormBuilder, private _classService: ClassService, private  activatedRoute: ActivatedRoute) {
    this.modifyFailed = false;

   }

  ngOnInit() {

    this.form = this.fb.group({
    ID: [this.classObj.CLSS_ID],
    Clnme: [this.classObj.CLSS_NAME, Validators.compose([Validators.required, Validators.minLength(2), Validators.maxLength(20)])],
    Description: [this.classObj.CLSS_DESC, Validators.compose([Validators.required])],
    Year: [this.classObj.CLSS_YEAR, Validators.compose([Validators.required, CustomValidators.range([1998, 2100])])],
    });

    this.activatedRoute.params.subscribe((params: Params) => {
    this.classObj.CLSS_ID = params['ClassID'];
    if(this.classObj.CLSS_ID){
      this.isEdit = true;
      this._classService.getClass(this.classObj.CLSS_ID).subscribe(data =>
        {
          this.classObj = data;
          this.form.controls['Clnme'].setValue(this.classObj.CLSS_NAME);
          this.form.controls['ID'].setValue(this.classObj.CLSS_ID);
          this.form.controls['Year'].setValue(this.classObj.CLSS_YEAR);
          this.form.controls['Description'].setValue(this.classObj.CLSS_DESC);
      },error => this.declareError('Loading Error'));

    }
    });
  }

  modifyClass(){

    this.classObj = {
      CLSS_ID: this.form.controls['ID'].value,
      CLSS_NAME: this.form.controls['Clnme'].value,
      CLSS_DESC: this.form.controls['Description'].value,
      CLSS_YEAR: this.form.controls['Year'].value,
    }

    if(!this.isEdit){
      this._classService.addClass(this.classObj).subscribe(data => {

                                                            this.newclassObj = data;
                                                            if(this.newclassObj.CLSS_NAME != this.classObj.CLSS_NAME)
                                                            this.declareError('Mismatch Error');
                                                            else
                                                            this.declareSuccess();
                                                          },
                                                           error => {
                                                             this.errorMsg = error;
                                                             this.modifyFailed = true;
                                                             this.modifySuccess = false;
                                                           });
    }else{
      this._classService.editClass(this.classObj).subscribe(data => {
  
                                                            this.newclassObj = data;
                                                            if(this.newclassObj.CLSS_NAME != this.classObj.CLSS_NAME)
                                                            this.declareError('Mismatch Error');
                                                            else
                                                            this.declareSuccess();
                                                          },
                                                           error => {
                                                             this.errorMsg = error;
                                                             this.modifyFailed = true;
                                                             this.modifySuccess = false;
                                                           });
    }


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

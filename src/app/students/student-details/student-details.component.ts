import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { CustomValidators } from 'ng2-validation';

import { IStudent, IClass, IPosition } from '../../resources/interfaces'
import { StudentsService } from '../../resources/students.service';
import { ActivatedRoute, Params } from '@angular/router';
import { ClassService } from '../../resources/class.service';
import { PositionsService } from '../../resources/positions.service';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.scss']
})
export class StudentDetailsComponent implements OnInit {

    public form: FormGroup;
    public studentObj: IStudent = {
          STUD_ID: null,
          STUD_NAME: null,
          STUD_BD: null,
          STUD_TEL: null,
          STUD_WGHT: null,
          STUD_LGTH: null,
          STUD_FAV_POS: null,
          STUD_CLSS_ID: null,
          STUD_PRNT_TEL: null,
          STUD_MNTR_NAME: null,
          STUD_PREV_CLUB: null,
          STUD_BARCODE: null,
          STUD_ACCS_CODE: null,
          STUD_SINCE: null,
          STUD_PRNT_NAME: null,
          STUD_PRNT_TELL: null,
          POST_NAME: null,
          POST_ABB: null,
          CLSS_YEAR: null,
          CLSS_NAME: null
        };

    public profileLink: string;

    public classesObj: IClass[] ;

    public positionsObj: IPosition[] ;

    public Studclass: IClass ;

    public Studposition: IPosition ;

    public isEdit: boolean;
    public modifyFailed: boolean;
    public modifySuccess: boolean;
    public errorMsg: string ;
    public newstudentObj: IStudent;

    constructor(private fb: FormBuilder, private _studentsService: StudentsService,
                private activatedRoute: ActivatedRoute, private _classService: ClassService,
                private _positionsService: PositionsService) {
      this.modifyFailed = false;


     }

    ngOnInit() {

      this.form = this.fb.group({

      StudentID:  [this.studentObj.STUD_ID],
      'Full Name':[this.studentObj.STUD_NAME,     Validators.compose([Validators.required, Validators.minLength(6), Validators.maxLength(45)])],
      BirthDate:  [this.studentObj.STUD_BD,       Validators.compose([Validators.required, CustomValidators.date])],
      Telephone:  [this.studentObj.STUD_TEL,      Validators.compose([Validators.minLength(11), Validators.maxLength(11)])],
      Weight:     [this.studentObj.STUD_WGHT,     Validators.compose([CustomValidators.range([15, 110])])],
      Height:     [this.studentObj.STUD_LGTH,     Validators.compose([CustomValidators.range([70, 250])])],
      Position:   [this.studentObj.STUD_FAV_POS,  Validators.compose([Validators.required])],
      BarCode:    [this.studentObj.STUD_BARCODE,  Validators.compose([Validators.required])],
      AccessCode:    [this.studentObj.STUD_ACCS_CODE, Validators.compose([Validators.required])],
      Clss:       [this.studentObj.STUD_CLSS_ID,  Validators.compose([Validators.required])],
      ParentTel:  [this.studentObj.STUD_PRNT_TEL, Validators.compose([Validators.required, Validators.minLength(11), Validators.maxLength(11)])],
      ParentTel2: [this.studentObj.STUD_PRNT_TELL,Validators.compose([Validators.minLength(11), Validators.maxLength(11)])],
      ParentName: [this.studentObj.STUD_PRNT_NAME,Validators.compose([Validators.required, Validators.minLength(6), Validators.maxLength(45)])],
      MentorName: [this.studentObj.STUD_MNTR_NAME],
      PrevClub:   [this.studentObj.STUD_PREV_CLUB]
      });
      this._classService.getClasses().subscribe(data =>  this.classesObj = data,
                                                error => this.declareError('Classes Loading Error'));

      this._positionsService.getPositions().subscribe(data => this.positionsObj = data,
                                                      error => this.declareError('Positions Loading Error'));

      this.activatedRoute.params.subscribe((params: Params) => {
      this.studentObj.STUD_ID = params['StudentID'];
      if(this.studentObj.STUD_ID){
        this.isEdit = true;

        this._studentsService.getStudent(this.studentObj.STUD_ID).subscribe(data =>
          {

            this.studentObj = data;
            this.form.controls['Full Name'].setValue(this.studentObj.STUD_NAME);
            this.form.controls['StudentID'].setValue(this.studentObj.STUD_ID);
            this.form.controls['BirthDate'].setValue(this.studentObj.STUD_BD);
            this.form.controls['Telephone'].setValue(this.studentObj.STUD_TEL);
            this.form.controls['Weight'].setValue(this.studentObj.STUD_WGHT);
            this.form.controls['Height'].setValue(this.studentObj.STUD_LGTH);
            this.form.controls['ParentTel'].setValue(this.studentObj.STUD_TEL);
            this.form.controls['ParentTel2'].setValue(this.studentObj.STUD_PRNT_TELL);
            this.form.controls['ParentName'].setValue(this.studentObj.STUD_PRNT_NAME);
            this.form.controls['MentorName'].setValue(this.studentObj.STUD_MNTR_NAME);
            this.form.controls['PrevClub'].setValue(this.studentObj.STUD_PREV_CLUB);
            this.form.controls['BarCode'].setValue(this.studentObj.STUD_BARCODE);
            this.form.controls['AccessCode'].setValue(this.studentObj.STUD_ACCS_CODE);
            this.form.controls['Clss'].setValue(this.studentObj.STUD_CLSS_ID);
            this.form.controls['Position'].setValue(this.studentObj.STUD_FAV_POS);
            this.profileLink = '/students/profile/' + this.studentObj.STUD_ID;
        },error => this.declareError('Loading Error'));


      }
      });

    }

    modifyStudent(){

        this.studentObj = {
        STUD_ID : this.form.controls['StudentID'].value,
        STUD_NAME: this.form.controls['Full Name'].value,
        STUD_BD: this.form.controls['BirthDate'].value,
        STUD_TEL: this.form.controls['Telephone'].value,
        STUD_WGHT: this.form.controls['Weight'].value,
        STUD_LGTH: this.form.controls['Height'].value,
        STUD_FAV_POS: this.form.controls['Position'].value,
        STUD_CLSS_ID: this.form.controls['Clss'].value,
        STUD_PRNT_TEL: this.form.controls['ParentTel'].value,
        STUD_PRNT_TELL: this.form.controls['ParentTel2'].value,
        STUD_PRNT_NAME: this.form.controls['ParentName'].value,
        STUD_MNTR_NAME: this.form.controls['MentorName'].value,
        STUD_BARCODE: this.form.controls['BarCode'].value,
        STUD_ACCS_CODE: this.form.controls['AccessCode'].value,
        STUD_SINCE: new Date(Date.now()),
        STUD_PREV_CLUB: this.form.controls['PrevClub'].value,
        CLSS_YEAR: null,
        POST_NAME: null,
        POST_ABB: null,
        CLSS_NAME: null
      }

       if(!this.isEdit){
        this._studentsService.addStudent(this.studentObj).subscribe(data => {
                                                              this.newstudentObj = data;
                                                              if(this.newstudentObj.STUD_NAME != this.studentObj.STUD_NAME)
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
        this._studentsService.editStudent(this.studentObj).subscribe(data => {
                                                              this.newstudentObj = data;
                                                              if(this.newstudentObj.STUD_NAME != this.studentObj.STUD_NAME)
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

    generateAccessCode(){

      let $BarCode = this.form.controls['BarCode'].value;
      let $ParentTel = this.form.controls['ParentTel'].value;

      let $AccessCode = $BarCode + '-' + $ParentTel + '-' + Math.floor(Math.random() * 1000 );

      this.form.controls['AccessCode'].setValue($AccessCode);
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

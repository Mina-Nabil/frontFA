import { Component, OnInit } from '@angular/core';
import { ISession, IClass, IUser } from '../../resources/interfaces';
import { FormBuilder, Validators, FormControl, FormGroup  } from '@angular/forms';
import { ClassService } from '../../resources/class.service';
import { SessionsService } from '../../resources/sessions.service';
import { ActivatedRoute, Params } from '@angular/router';
import { CustomValidators } from 'ng2-validation';
import { UsersService } from '../../resources/users.service';

@Component({
  selector: 'app-ss-add',
  templateUrl: './ss-add.component.html',
  styleUrls: ['./ss-add.component.scss']
})
export class SsAddComponent implements OnInit {

  public form: FormGroup;
  public sessionObj: ISession = {
        SESS_ID : null,
        SESS_DESC : null,
        SESS_USER_ID : null,
        SESS_END_DATE : null,
        SESS_STRT_DATE : null
      };
  public isEdit: boolean;
  public modifyFailed: boolean;
  public modifySuccess: boolean;
  public errorMsg: string ;

  public chosenClasses: number[] ;

  public classesObj: IClass[] ;

  public usersObj : IUser[] ;

  public newsessionObj: ISession;

  constructor(private fb: FormBuilder, private _classService: ClassService, private  activatedRoute: ActivatedRoute,
              private _sessionService: SessionsService, private _userService: UsersService) {
    this.modifyFailed = false;

   }

  ngOnInit() {

    this.form = this.fb.group({
    ID: [this.sessionObj.SESS_ID],
    StartDate: [this.sessionObj.SESS_STRT_DATE, Validators.compose([Validators.required, CustomValidators.date])],
    EndDate: [this.sessionObj.SESS_END_DATE, Validators.compose([Validators.required, CustomValidators.date])],
    Description: [this.sessionObj.SESS_DESC, Validators.compose([Validators.required])],
    Mentor: [null, Validators.compose([Validators.required])],
    SessClass: [null, Validators.compose([Validators.required])],
    });

    this._classService.getClasses().subscribe(data =>  this.classesObj = data,
                                              error => this.declareError('Classes Loading Error'));

    this._userService.getUsers().subscribe(data => this.usersObj = data,
                                                    error => this.declareError('Mentors Loading Error'));

    this.activatedRoute.params.subscribe((params: Params) => {
    this.sessionObj.SESS_ID = params['SessID'];
    if(this.sessionObj.SESS_ID != null){
      this.isEdit = true;
      this._sessionService.getSession(this.sessionObj.SESS_ID).subscribe(data =>
        {
          this.sessionObj = data;
          this.form.controls['StartDate'].setValue(this.sessionObj.SESS_STRT_DATE);
          this.form.controls['ID'].setValue(this.sessionObj.SESS_ID);
          this.form.controls['EndDate'].setValue(this.sessionObj.SESS_END_DATE);
          this.form.controls['Description'].setValue(this.sessionObj.SESS_DESC);
          this.form.controls['Mentor'].setValue(this.sessionObj.SESS_USER_ID);
          this.form.controls['Class'].setValue(this.sessionObj.SESS_USER_ID);
      },error => this.declareError('Loading Error'));

    }
    });

  }

  modifySession(){

    this.chosenClasses = this.form.controls['SessClass'].value;
    console.log(this.chosenClasses)
    this.sessionObj = {
      SESS_STRT_DATE: this.form.controls['StartDate'].value,
      SESS_ID: this.form.controls['ID'].value,
      SESS_DESC: this.form.controls['Description'].value,
      SESS_END_DATE: this.form.controls['EndDate'].value,
      SESS_USER_ID: this.form.controls['Mentor'].value,
    }

    this.chosenClasses = this.form.controls['SessClass'].value;


    if(!this.isEdit){
      this._sessionService.addSession(this.sessionObj, this.chosenClasses).subscribe(data => {
                                                            this.newsessionObj = data;
                                                            if(this.newsessionObj.SESS_STRT_DATE.getTime() == this.sessionObj.SESS_STRT_DATE.getTime())
                                                            this.declareSuccess();
                                                            else
                                                            this.declareError('Mismatch Error');
                                                          },
                                                           error => {
                                                             this.errorMsg = error;
                                                             this.modifyFailed = true;
                                                             this.modifySuccess = false;
                                                           });
    }else{
      this._sessionService.editSession(this.sessionObj, this.chosenClasses).subscribe(data => {
                                                            this.newsessionObj = data;
                                                            if(this.newsessionObj.SESS_STRT_DATE == this.sessionObj.SESS_STRT_DATE)
                                                            this.declareSuccess();
                                                            else
                                                            this.declareError('Mismatch Error');
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

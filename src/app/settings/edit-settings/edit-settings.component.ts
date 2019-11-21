import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { CustomValidators } from 'ng2-validation';

import { ISettings } from '../../resources/interfaces';
import { SettingsService } from '../../resources/settings.service';

@Component({
  selector: 'app-edit-settings',
  templateUrl: './edit-settings.component.html',
  styleUrls: ['./edit-settings.component.scss']
})


export class EditSettingsComponent implements OnInit {

  public form: FormGroup;

  public settingObj: ISettings =
  {
    STTNG_SUB_AMNT: null,
  };

  public modifyFailed: boolean;
  public modifySuccess: boolean;
  public errorMsg: string ;
  public result: any;

  constructor(private fb: FormBuilder, private _settingsService: SettingsService) { }

  ngOnInit() {

    this._settingsService.getSettings().subscribe(data => {
      this.settingObj=data
      console.log(this.settingObj.STTNG_SUB_AMNT)
      this.form.controls['subAmount'].setValue( this.settingObj.STTNG_SUB_AMNT);
    });

    this.form = this.fb.group({
      subAmount :   [this.settingObj.STTNG_SUB_AMNT, Validators.compose([Validators.required])],

    });
  }

  modifySettings(){
    this.settingObj.STTNG_SUB_AMNT=this.form.controls['subAmount'].value;

    this._settingsService.setSettings(this.settingObj).subscribe(data => {
                this.result = data;
                if(this.result.result != 1)
                this.declareError('Settings Modification Failed');
                else
                this.declareSuccess();
              },
               error => {
                 this.errorMsg = error;
                 this.modifyFailed = true;
                 this.modifySuccess = false;
               })
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

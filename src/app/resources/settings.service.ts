import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs/Rx';
import { filter, map, catchError } from 'rxjs/operators';
import { _throw } from 'rxjs/observable/throw';
import { ISettings } from './interfaces'
import { HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  constructor(private http: HttpClient) { }

  private BASEURL : string = 'http://18.184.195.226/STMaryBE/Api/';

  private _getSettingURL : string = this.BASEURL + 'getsettings';
  private _setSettingURL : string = this.BASEURL + 'setsettings';

  getSettings(): Observable<ISettings>{
   return this.http.get<ISettings>(this._getSettingURL ).catch(this.errorHandler);
  }

  setSettings(settingObj: ISettings){
   return this.http.post(this._setSettingURL, settingObj).catch(this.errorHandler);
  }

  errorHandler(error: HttpErrorResponse){
    return Observable.throw(error.message || "Server Error");
  }
}

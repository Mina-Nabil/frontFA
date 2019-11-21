import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import { filter, map, catchError } from 'rxjs/operators';
import { _throw } from 'rxjs/observable/throw';
import { ISession, IUser } from './interfaces'
import { HttpErrorResponse } from '@angular/common/http';

import { ISessionNames } from './interfaces';
import { IClassAttendance } from './interfaces';



@Injectable({
  providedIn: 'root'
})
export class AttendanceService {

  private BASEURL : string = 'http://18.184.195.226/STMaryBE/Api/';

  private _getAttendanceUrl : string = this.BASEURL + 'getAttendance/' ;
  private _getSessionsAttendanceUrl : string = this.BASEURL + 'getSessionsForAttendance/' ;
  private _getAttendanceforStudentUrl : string = this.BASEURL + 'getAttendanceforStudent/' ;

  constructor(private http: HttpClient) { }


  getSessionsForAttendance(classID: number){
    return this.http.get<ISessionNames[]>(this._getSessionsAttendanceUrl + classID).catch(this.errorHandler);
  }

  getAttendance(classID: number) {
    return this.http.get<IClassAttendance[]>(this._getAttendanceUrl + classID).catch(this.errorHandler);
  }

  getAttendanceforStudent(studentID: number) {
    return this.http.get<any[]>(this._getAttendanceforStudentUrl + studentID).catch(this.errorHandler);
  }

  private errorHandler(error: HttpErrorResponse){
    return Observable.throw(error.message || "Server Error");
  }

}

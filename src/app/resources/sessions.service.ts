import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs/Rx';
import { filter, map, catchError } from 'rxjs/operators';
import { _throw } from 'rxjs/observable/throw';
import { ISession, IClass, IStudentChart, IAttendance } from './interfaces'
import { HttpErrorResponse , HttpRequest} from '@angular/common/http';
import { CalendarEvent } from 'angular-calendar';


@Injectable({
  providedIn: 'root'
})
export class SessionsService {

  private BASEURL : string = 'http://18.184.195.226/STMaryBE/Api/';

  private _getSessionsUrl : string = this.BASEURL + 'getSessions/';
  private _getSessionUrl : string = this.BASEURL + 'getSession/';
  private _getAttChartUrl : string = this.BASEURL + 'getChart/';
  private _getSessionCalUrl : string = this.BASEURL + 'getSession_limit/';
  private _getAllSessionsUrl : string = this.BASEURL + 'getAllSessions/';
  private _addSessionUrl : string = this.BASEURL + 'addSession/';
  private _editSessionUrl : string = this.BASEURL + 'editSession/';
  private _deleteSessionUrl : string = this.BASEURL + 'deleteSession/';
  private _getAttendanceUrl : string = this.BASEURL + 'getattendancelist/';
  private _takeAttendanceUrl : string = this.BASEURL + 'setattendancetrue/';
  private _cancelAttendanceUrl : string = this.BASEURL + 'setattendancefalse/';

  constructor(private http: HttpClient) { }

  getSessions(classID: number) : Observable<ISession[]>{// Sessions Per Class
    return this.http.get<ISession[]>(this._getSessionsUrl + classID).catch(this.errorHandler);
  }

  getAllSessions() : Observable<ISession[]>{// All Sessions for the calendar
    return this.http.get<ISession[]>(this._getAllSessionsUrl).catch(this.errorHandler);
  }

  getSession(sessID: number) : Observable<ISession>{ //1 Session
    return this.http.get<ISession>(this._getSessionUrl + sessID).catch(this.errorHandler);
  }

  getCalSessions(months: number) : Observable<CalendarEvent[]> {
    return this.http.get<CalendarEvent[]>(this._getSessionCalUrl + months).catch(this.errorHandler);
  }

  getAttendanceList(sessID: number) : Observable<IAttendance[]> {
    return this.http.get<IAttendance[]>(this._getAttendanceUrl + sessID).catch(this.errorHandler);
  }

  addSession(sessionObj: ISession, classes: number[]) : Observable<ISession>{
    let temp : any[] = [];
    temp.push(sessionObj);
    temp.push({'classes' : classes})
    return this.http.post<ISession>(this._addSessionUrl, temp ).catch(this.errorHandler);
  }

  editSession(sessionObj: ISession, classes: number[]) : Observable<ISession>{
    return this.http.get<ISession>(this._editSessionUrl + sessionObj.SESS_ID ).catch(this.errorHandler);
  }

  getAttendanceChart(student: number, month: number, year: number) : Observable<IStudentChart>{
    return this.http.get<IStudentChart>(this._getAttChartUrl + student + '/' + month + '/' + year);
  }

  deleteSession(sessionid: number) {
    return this.http.delete(this._deleteSessionUrl + sessionid);
  }

  takeAttendance(sessid : number, studid : number) : Observable<IAttendance[]> {
    return this.http.get<IAttendance[]>(this._takeAttendanceUrl + sessid + '/' + studid).catch(this.errorHandler);
  }

  cancelAttendance(sessid : number, studid : number) : Observable<IAttendance[]> {
    return this.http.get<IAttendance[]>(this._cancelAttendanceUrl + sessid + '/' + studid).catch(this.errorHandler);
  }

  private errorHandler(error: HttpErrorResponse){
    return Observable.throw(error.message || "Server Error");
  }

}

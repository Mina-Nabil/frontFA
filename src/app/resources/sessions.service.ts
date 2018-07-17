import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { ISession, IClass } from './interfaces'
import { HttpErrorResponse } from '@angular/common/http';
import { CalendarEvent } from 'angular-calendar';


@Injectable({
  providedIn: 'root'
})
export class SessionsService {

  private BASEURL : string = 'http://35.177.192.89/ftballAcademy/Api/';

  private _getSessionsUrl : string = this.BASEURL + 'getSessions/';
  private _getSessionUrl : string = this.BASEURL + 'getSession/';
  private _getSessionCalUrl : string = this.BASEURL + 'getSession_limit/';
  private _getAllSessionsUrl : string = this.BASEURL + 'getAllSessions/';
  private _addSessionUrl : string = this.BASEURL + 'addSession/';
  private _editSessionUrl : string = this.BASEURL + 'editSession/';

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

  addSession(sessionObj: ISession, classes: number[]) : Observable<ISession>{
    let temp : any[] = [];
    temp.push(sessionObj);
    temp.push({'classes' : classes})
    return this.http.post<ISession>(this._addSessionUrl, temp ).catch(this.errorHandler);
  }

  editSession(sessionObj: ISession, classes: number[]) : Observable<ISession>{
    return this.http.get<ISession>(this._editSessionUrl + sessionObj.SESS_ID ).catch(this.errorHandler);
  }

  private errorHandler(error: HttpErrorResponse){
    return Observable.throw(error.message || "Server Error");
  }
}

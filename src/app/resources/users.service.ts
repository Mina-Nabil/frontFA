import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import { filter, map, catchError } from 'rxjs/operators';
import { _throw } from 'rxjs/observable/throw';
import { ISession, IUser } from './interfaces'
import { HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private BASEURL : string = 'http://18.184.195.226/STMaryBE/Api/';

  private _getUsersUrl : string = this.BASEURL + 'getUsers' ;
  private _loginUrl : string = this.BASEURL + 'login' ;

  constructor(private http: HttpClient) { }

  getUsers() : Observable<IUser[]> {
    return this.http.get<IUser[]>(this._getUsersUrl).catch(this.errorHandler);
  }

  getLoginToken(credentials: any) {
    return this.http.post(this._loginUrl, credentials).catch(this.errorHandler);
  }

  private errorHandler(error: HttpErrorResponse){
    return Observable.throw(error.message || "Server Error");
  }
}

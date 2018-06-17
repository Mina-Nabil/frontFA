import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { ISession, IUser } from './interfaces'
import { HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private BASEURL : string = 'http://35.177.192.89/ftballAcademy/Api/';

  private _getUsersUrl : string = this.BASEURL + 'getUsers' ;

  constructor(private http: HttpClient) { }

  getUsers() : Observable<IUser[]> {
    return this.http.get<IUser[]>(this._getUsersUrl).catch(this.errorHandler);
  }

  private errorHandler(error: HttpErrorResponse){
    return Observable.throw(error.message || "Server Error");
  }
}

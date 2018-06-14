import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IStudent } from '../resources/interfaces';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  private BASEURL : string = 'http://35.177.192.89/ftballAcademy/Api/';

  private _url: string = this.BASEURL + 'getStudents';
  private _ByClassurl: string = this.BASEURL + 'getStudents/';
  private _Addurl: string = this.BASEURL + 'addStudent';

  constructor(private http: HttpClient) { }

  getAllStudents(): Observable<IStudent[]> {
    return this.http.get<IStudent[]>(this._url)
                .catch(this.errorHandler);
  }

  getStudents(classID: number): Observable<IStudent[]> {
    return this.http.get<IStudent[]>(this._ByClassurl + classID)
                .catch(this.errorHandler);
  }

  addStudent(studentObj: IStudent): Observable<IStudent> {
    return this.http.post<IStudent>(this._Addurl, studentObj).catch(this.errorHandler);
  }

  errorHandler(error: HttpErrorResponse){
    return Observable.throw(error.message || "Server Error");
  }
}

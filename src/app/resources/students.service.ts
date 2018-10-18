import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IStudent } from '../resources/interfaces';
import { Observable } from 'rxjs/Rx';
import { filter, map, catchError } from 'rxjs/operators';
import { _throw } from 'rxjs/observable/throw';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  private BASEURL : string = 'http://18.184.195.226/STMaryBE/Api/';

  private _url: string = this.BASEURL + 'getStudents';
  private _ByClassurl: string = this.BASEURL + 'getStudents/';
  private _ByStudenturl: string = this.BASEURL + 'getStudent/';
  private _Addurl: string = this.BASEURL + 'addStudent';
  private _Editurl: string = this.BASEURL + 'editStudent/';

  constructor(private http: HttpClient) { }

  getAllStudents(): Observable<IStudent[]> {
    return this.http.get<IStudent[]>(this._url)
                .catch(this.errorHandler);
  }

  getStudents(classID: number): Observable<IStudent[]> {
    return this.http.get<IStudent[]>(this._ByClassurl + classID)
                .catch(this.errorHandler);
  }

  getStudent(studentID: number): Observable<IStudent> {
    return this.http.get<IStudent>(this._ByStudenturl + studentID).catch(this.errorHandler);
  }

  addStudent(studentObj: IStudent): Observable<IStudent> {
    return this.http.post<IStudent>(this._Addurl, studentObj).catch(this.errorHandler);
  }

  editStudent(studentObj: IStudent): Observable<IStudent> {
    return this.http.post<IStudent>(this._Editurl + studentObj.STUD_ID, studentObj).catch(this.errorHandler);
  }

  errorHandler(error: HttpErrorResponse){
    return Observable.throw(error.message || "Server Error");
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IStudent } from './interfaces/student';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  private _url: string = "http://35.177.192.89/ftballAcademy/Api/getStudents";

  constructor(private http: HttpClient) { }

  getAllStudents(): Observable<IStudent[]> {
    return this.http.get<IStudent[]>(this._url)
                .catch(this.errorHandler);
  }

  errorHandler(error: HttpErrorResponse){
    return Observable.throw(error.message || "Server Error");
  }
}

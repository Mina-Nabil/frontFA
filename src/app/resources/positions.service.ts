import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { IPosition } from './interfaces'
import { HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PositionsService {

  private BASEURL : string = 'http://35.177.192.89/ftballAcademy/Api/';

  private _allPosURL : string = this.BASEURL + 'getPositions';

  constructor(private http: HttpClient) { }

  getPositions(): Observable<IPosition[]>{
   return this.http.get<IPosition[]>(this._allPosURL).catch(this.errorHandler);
  }

  errorHandler(error: HttpErrorResponse){
    return Observable.throw(error.message || "Server Error");
  }
}

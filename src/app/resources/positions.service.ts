import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs/Rx';
import { filter, map, catchError } from 'rxjs/operators';
import { _throw } from 'rxjs/observable/throw';
import { IPosition } from './interfaces'
import { HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PositionsService {

  private BASEURL : string = 'http://18.184.195.226/STMaryBE/Api/';

  private _allPosURL : string = this.BASEURL + 'getPositions';
  private _PosURL : string = this.BASEURL + 'getPosition/';

  constructor(private http: HttpClient) { }

  getPositions(): Observable<IPosition[]>{
   return this.http.get<IPosition[]>(this._allPosURL).catch(this.errorHandler);
  }

  getPosition(PositionID: number): Observable<IPosition>{
   return this.http.get<IPosition>(this._PosURL + PositionID).catch(this.errorHandler);
  }

  errorHandler(error: HttpErrorResponse){
    return Observable.throw(error.message || "Server Error");
  }
}

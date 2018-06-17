import { Injectable } from '@angular/core';
import { IClass } from './interfaces';
import { ChildrenItems } from '../core/menu/menu.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { HttpErrorResponse } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClassService {

  private BASEURL : string = 'http://35.177.192.89/ftballAcademy/Api/';

  private _classesUrl : string = this.BASEURL + 'getClasses';
  private _classUrl : string = this.BASEURL + 'getClass/';
  private _routeUrl: string = this.BASEURL + 'getClassesRoutes';
  private _addUrl: string = this.BASEURL + 'addClass';
  private _editUrl: string = this.BASEURL + 'editClass/';

  constructor(private http: HttpClient) { }

  getClasses(): Observable<IClass[]> {
    return this.http.get<IClass[]>(this._classesUrl).catch(this.errorHandler);
  }

  getClass(classID: number): Observable<IClass>{
    return this.http.get<IClass>(this._classUrl + classID).catch(this.errorHandler);
  }

  getClassesRoutes(): Observable<ChildrenItems[]> {
    return this.http.get<ChildrenItems[]>(this._routeUrl).catch(this.errorHandler);
  }

  addClass (classObj: IClass): Observable<IClass>{
    return this.http.post<IClass>(this._addUrl, classObj).catch(this.errorHandler);
  }
  editClass (classObj: IClass): Observable<IClass>{
    return this.http.post<IClass>(this._editUrl + classObj.CLSS_ID, classObj).catch(this.errorHandler);
  }


  errorHandler(error: HttpErrorResponse){
    return Observable.throw(error.message || "Server Error");
  }

}
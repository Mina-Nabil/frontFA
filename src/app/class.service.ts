import { Injectable } from '@angular/core';
import { IClass } from './interfaces/class';
import { ChildrenItems } from './core/menu/menu.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { HttpErrorResponse } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClassService {

  private _url : string = 'http://35.177.192.89/ftballAcademy/Api/getClasses';
  private _routeUrl: string = 'http://35.177.192.89/ftballAcademy/Api/getClassesRoutes';
  private _addUrl: string = 'http://35.177.192.89/ftballAcademy/Api/addClass';

  constructor(private http: HttpClient) { }

  getClasses(): Observable<IClass[]> {
    return this.http.get<IClass[]>(this._url).catch(this.errorHandler);
  }

  getClassesRoutes(): Observable<ChildrenItems[]> {
    return this.http.get<ChildrenItems[]>(this._routeUrl).catch(this.errorHandler);
  }

  addClass (classObj: IClass): Observable<IClass>{
    return this.http.post<IClass>(this._addUrl, classObj).catch(this.errorHandler);
  }

  errorHandler(error: HttpErrorResponse){
    return Observable.throw(error.message || "Server Error");
  }

}

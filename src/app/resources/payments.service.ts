import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs/Rx';
import { filter, map, catchError } from 'rxjs/operators';
import { _throw } from 'rxjs/observable/throw';
import { IPayment } from './interfaces'
import { HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PaymentsService {

    private BASEURL : string = 'http://18.184.195.226/STMaryBE/Api/';

    private _classPaymentsURL : string = this.BASEURL + 'getClassPayments/';
    private _studentPaymentsURL : string = this.BASEURL + 'getStudentsPayments/';
    private _payPaymentsURL : string = this.BASEURL + 'payPayment/';
    private _addURL : string = this.BASEURL + 'insertPayment/';

    constructor(private http: HttpClient) { }

    getClassPending(ClassID: number): Observable<IPayment[]>{
     return this.http.get<IPayment[]>(this._classPaymentsURL + ClassID).catch(this.errorHandler);
    }

    getStudentHistory(StudentID: number): Observable<IPayment[]>{
     return this.http.get<IPayment[]>(this._studentPaymentsURL + StudentID).catch(this.errorHandler);
    }

    payPayment(PaymentID: number){
      return this.http.get(this._payPaymentsURL + PaymentID).catch(this.errorHandler);
    }

    addPayment(paymentObj: IPayment) {
      return this.http.post(this._addURL, paymentObj).catch(this.errorHandler);
    }

    errorHandler(error: HttpErrorResponse){
      return Observable.throw(error.message || "Server Error");
    }
}

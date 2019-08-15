import { Component, OnInit } from '@angular/core';
import { PaymentsService } from '../../resources/payments.service';
import { ActivatedRoute, Params } from '@angular/router';


@Component({
  selector: 'app-payments-table',
  templateUrl: './payments-table.component.html',
  styleUrls: ['./payments-table.component.scss']
})
export class PaymentsTableComponent implements OnInit {

  rows = [];
  temp = [];
  selected: any[] = [];
  columns = [{
    name: 'Student Name', prop: 'STUD_NAME', width: '120'
  },{
    name: 'Payment',   prop: 'PYMT_NAME', width:'120'
  },{
    name: 'Amount',   prop: 'PYMT_AMNT', width:'120'
  },{
    name: 'Date',  prop: 'PYMT_DATE', width: '200'
  }];

  constructor(private _paymentService : PaymentsService, private activatedRoute: ActivatedRoute) {

    this.activatedRoute.params.subscribe((params: Params) => {
    let classID = params['classID'];
    if(classID){
      this._paymentService.getClassPending(classID).subscribe(data => {
        this.temp = [...data];
        this.rows = data;
      })
    }
  });
}

  ngOnInit() {
  }

  updateFilter(event) {
  const val = event.target.value.toLowerCase();
  // filter our data
  const temp = this.temp.filter(function(d) {
    return d.CLSS_NME.toLowerCase().indexOf(val) !== -1 || !val;
  });
  // update the rows
  this.rows = temp;
}

  onSelect(event) {
    if(confirm("You are about to save that " + event.selected[0].STUD_NAME + " paid this month. Do you confirm?")){
      this._paymentService.payPayment(event.selected[0].PYMT_ID).subscribe(data => {
        if(data==1)
          window.location.reload();
        else
          alert('Oops! Something Went wrong')
      });
    }

  }

  onActivate(event){}

}

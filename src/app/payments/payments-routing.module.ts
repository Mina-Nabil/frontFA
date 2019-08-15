import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PaymentsTableComponent } from './payments-table/payments-table.component';
import { PaymentsInsertComponent } from './payments-insert/payments-insert.component';

const routes: Routes = [{
  path: 'insert',
  component: PaymentsInsertComponent,
},{
  path: ':classID',
  component: PaymentsTableComponent,
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaymentsRoutingModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaymentsRoutingModule } from './payments-routing.module';
import { PaymentsTableComponent } from './payments-table/payments-table.component';


import { MatInputModule } from '@angular/material';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { MatCardModule } from '@angular/material';
import { PaymentsInsertComponent } from './payments-insert/payments-insert.component';

@NgModule({
  imports: [
    CommonModule,
    PaymentsRoutingModule,
    MatInputModule,
    NgxDatatableModule,
    MatCardModule
  ],
  declarations: [PaymentsTableComponent, PaymentsInsertComponent]
})
export class PaymentsModule { }

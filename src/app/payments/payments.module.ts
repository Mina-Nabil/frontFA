import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaymentsRoutingModule } from './payments-routing.module';
import { PaymentsTableComponent } from './payments-table/payments-table.component';



//Table
import { MatInputModule } from '@angular/material';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { PaymentsInsertComponent } from './payments-insert/payments-insert.component';

//Form imports
import {
  MatCardModule,
  MatIconModule,
  MatRadioModule,
  MatButtonModule,
  MatProgressBarModule,
  MatToolbarModule,
  MatMenuModule,
  MatSelectModule,
  MatListModule} from '@angular/material';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    PaymentsRoutingModule,
    MatInputModule,
    NgxDatatableModule,
    MatCardModule,
    MatIconModule,
    MatRadioModule,
    MatButtonModule,
    MatProgressBarModule,
    MatToolbarModule,
    MatMenuModule,
    MatSelectModule,
    MatListModule,
    FormsModule,
    ReactiveFormsModule

  ],
  declarations: [PaymentsTableComponent, PaymentsInsertComponent]
})
export class PaymentsModule { }

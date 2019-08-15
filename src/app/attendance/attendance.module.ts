import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AttendanceRoutingModule } from './attendance-routing.module';
import { AttTableComponent } from './att-table/att-table.component';


import { MatInputModule } from '@angular/material';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { MatCardModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    AttendanceRoutingModule,
    MatInputModule,
    NgxDatatableModule,
    MatCardModule
  ],
  declarations: [AttTableComponent]
})
export class AttendanceModule { }

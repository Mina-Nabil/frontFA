import { NgModule } from '@angular/core';

//Table Imports
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

//Form imports
import {
  MatCardModule,
  MatIconModule,
  MatRadioModule,
  MatButtonModule,
  MatProgressBarModule,
  MatToolbarModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FlexLayoutModule } from '@angular/flex-layout';
import { QuillModule } from 'ngx-quill';


import { PLClassesRoutingModule } from './plclasses-routing.module';
import { PlClassesTableComponent } from './pl-classes-table/pl-classes-table.component';
import { PlClassesEditComponent } from './pl-classes-edit/pl-classes-edit.component';

@NgModule({
  imports: [
    CommonModule,
    PLClassesRoutingModule,
    MatInputModule,
    NgxDatatableModule,
    MatCardModule,
    MatIconModule,
    MatRadioModule,
    MatButtonModule,
    MatProgressBarModule,
    MatToolbarModule,
    FlexLayoutModule,
    QuillModule,
    ReactiveFormsModule,
    FormsModule
  ],
  declarations: [PlClassesTableComponent, PlClassesEditComponent]
})
export class PLClassesModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Table Imports
import { MatInputModule } from '@angular/material';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

//Form imports
import {
  MatCardModule,
  MatIconModule,
  MatRadioModule,
  MatButtonModule,
  MatProgressBarModule,
  MatToolbarModule,
  MatSelectModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FlexLayoutModule } from '@angular/flex-layout';
import { QuillModule } from 'ngx-quill';


import { Studentroutes } from './students-routing.module';
import { StudentsTableComponent } from './students-table/students-table.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { RouterModule } from '@angular/router';
import { StudentProfileComponent } from './student-profile/student-profile.component';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    MatRadioModule,
    MatButtonModule,
    MatProgressBarModule,
    MatToolbarModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    NgxDatatableModule,
    QuillModule,
    MatInputModule,
    MatSelectModule,
    RouterModule.forChild(Studentroutes)
  ],
  declarations: [StudentsTableComponent, StudentDetailsComponent, StudentProfileComponent]
})
export class StudentsModule { }

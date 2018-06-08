import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Studentroutes } from './students-routing.module';
import { StudentsTableComponent } from './students-table/students-table.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { RouterModule } from '@angular/router';
import { StudentProfileComponent } from './student-profile/student-profile.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(Studentroutes),
  ],
  declarations: [StudentsTableComponent, StudentDetailsComponent, StudentProfileComponent]
})
export class StudentsModule { }

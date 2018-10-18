import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentsTableComponent } from './students-table/students-table.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { StudentProfileComponent } from './student-profile/student-profile.component';
import { StudentsSubscriptionComponent } from './students-subscription/students-subscription.component';

export const Studentroutes: Routes = [
  {
    path: 'add',
    component: StudentDetailsComponent,
  },{
    path: 'all',
    component: StudentsTableComponent,
  },{
    path: 'subsc',
    component: StudentsSubscriptionComponent,
  },{
    path: 'profile/:StudentID',
    component: StudentProfileComponent,
  },{
    path: 'edit/:StudentID',
    component: StudentDetailsComponent
  },{
    path: ':ClassID',
    component: StudentsTableComponent
  }
];

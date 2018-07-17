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
  MatSelectModule,
  MatExpansionModule,
  MatButtonToggleModule,
  MatListModule, MatGridListModule,
  MatMenuModule,
  MatSidenavModule,
  MatTabsModule,
  MatDialogModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FlexLayoutModule } from '@angular/flex-layout';
import { QuillModule } from 'ngx-quill';

import { CalendarModule, CalendarDateFormatter } from 'angular-calendar';

import { TRSessionsRoutes } from './tr-sessions-routing.module';
import { SsAddComponent } from './ss-add/ss-add.component';
import { SsCalendarComponent } from './ss-calendar/ss-calendar.component';
import { SsTableComponent } from './ss-table/ss-table.component';
import { RouterModule } from '@angular/router';



@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(TRSessionsRoutes),
    MatCardModule,
    MatIconModule,
    MatRadioModule,
    MatButtonModule,
    MatProgressBarModule,
    MatToolbarModule,
    MatSelectModule,
    MatInputModule,
    NgxDatatableModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    QuillModule,
    CalendarModule.forRoot(),
    MatExpansionModule,
    MatButtonToggleModule,
    MatListModule,
    MatGridListModule,
    MatMenuModule,
    MatSidenavModule,
    MatTabsModule,
    MatDialogModule
  ],
  declarations: [SsAddComponent, SsCalendarComponent, SsTableComponent]
})
export class TrSessionsModule { }

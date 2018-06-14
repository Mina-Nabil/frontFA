import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SsCalendarComponent } from './ss-calendar/ss-calendar.component';
import { SsAddComponent } from './ss-add/ss-add.component';
import { SsDetailsComponent } from './ss-details/ss-details.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SsCalendarComponent, SsAddComponent, SsDetailsComponent]
})
export class TrsessionsModule { }

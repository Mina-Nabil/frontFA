import { Routes } from '@angular/router';

import { SsCalendarComponent } from './ss-calendar/ss-calendar.component';
import { SsAddComponent } from './ss-add/ss-add.component';
import { SsTableComponent } from './ss-table/ss-table.component';
import { SsAttendanceComponent } from './ss-attendance/ss-attendance.component';


export const TRSessionsRoutes: Routes = [
  {
    path: 'cal',
    component: SsCalendarComponent
  },{
    path: 'add',
    component: SsAddComponent
  },{
    path: 'edit/:SessID',
    component: SsAddComponent
  },{
    path: 'attendance/:SessID',
    component: SsAttendanceComponent
  },{
    path: ':ClassID',
    component: SsTableComponent
  }
];

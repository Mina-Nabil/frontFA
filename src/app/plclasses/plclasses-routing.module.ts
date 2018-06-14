import { Routes } from '@angular/router';

import { PlClassesTableComponent } from './pl-classes-table/pl-classes-table.component'
import { PlClassesEditComponent } from './pl-classes-edit/pl-classes-edit.component';

export const PLClassesRoutes: Routes = [
  {
    path: 'table',
    component: PlClassesTableComponent,
  },{
    path: 'add',
    component: PlClassesEditComponent
  },{
    path: 'edit/:ClassID',
    component: PlClassesEditComponent
  }
];

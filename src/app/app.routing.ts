import { Routes } from '@angular/router';

import { AdminLayoutComponent, AuthLayoutComponent } from './core';

export const AppRoutes: Routes = [{
  path: '',
  component: AdminLayoutComponent,
  children: [{
    path: '',
    loadChildren: './dashboard/dashboard.module#DashboardModule'
  },{
    path: 'students',
    loadChildren: './students/students.module#StudentsModule'
  },{
    path: 'classes',
    loadChildren: './plclasses/plclasses.module#PLClassesModule'
  },{
    path: 'trsessions',
    loadChildren: './tr-sessions/tr-sessions.module#TrSessionsModule'
  }]
},{
  path: '',
  component: AuthLayoutComponent,
  children: [{
    path: 'session',
    loadChildren: './session/session.module#SessionModule'
  }]
}, {
  path: '**',
  redirectTo: 'session/404'
}];

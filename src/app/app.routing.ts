import { Routes } from '@angular/router';

import { AdminLayoutComponent, AuthLayoutComponent } from './core';
import { AuthGuardService as AuthGaurdian} from './resources/auth-gaurd.service';

export const AppRoutes: Routes = [{
  path: '',
  component: AdminLayoutComponent,
  children: [{
    path: '',
    loadChildren: './dashboard/dashboard.module#DashboardModule',
    canActivate: [AuthGaurdian]
  },{
    path: 'students',
    loadChildren: './students/students.module#StudentsModule',
    canActivate: [AuthGaurdian]
  },{
    path: 'classes',
    loadChildren: './plclasses/plclasses.module#PLClassesModule',
    canActivate: [AuthGaurdian]
  },{
    path: 'trsessions',
    loadChildren: './tr-sessions/tr-sessions.module#TrSessionsModule',
    canActivate: [AuthGaurdian]
  }]
},{
  path: '',
  component: AuthLayoutComponent,
  children: [{
    path: 'home',
    loadChildren: './login/login.module#LoginModule'
  }]
}, {
  path: '**',
  redirectTo: 'session/404'
}];

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { LoadingBarRouterModule } from '@ngx-loading-bar/router';

import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';

import { AgmCoreModule } from '@agm/core';

import { StudentsService } from './resources/students.service';
import { PaymentsService } from './resources/payments.service';
import { AuthServiceService } from './resources/auth-service.service';

import {
  MatSidenavModule,
  MatCardModule,
  MatMenuModule,
  MatCheckboxModule,
  MatIconModule,
  MatButtonModule,
  MatToolbarModule,
  MatTabsModule,
  MatListModule,
  MatSlideToggleModule,
  MatSelectModule,
  MatProgressBarModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import {BidiModule} from '@angular/cdk/bidi';

import {
  MenuComponent,
  HeaderComponent,
  SidebarComponent,
  NotificationComponent,
  OptionsComponent,
  AdminLayoutComponent,
  AuthLayoutComponent,
  AccordionAnchorDirective,
  AccordionLinkDirective,
  AccordionDirective} from './core';

import { AppRoutes } from './app.routing';
import { AppComponent } from './app.component';
import { ClassService } from './resources/class.service';
import { SettingsService } from './resources/settings.service';
import { AttendanceService } from './resources/attendance.service';
import { SessionsService } from './resources/sessions.service';
import { AuthGuardService } from './resources/auth-gaurd.service';
import { JwtHelperService, JwtModule } from '@auth0/angular-jwt';
import { UsersService } from './resources/users.service';
export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true,
  wheelSpeed: 2,
  wheelPropagation: true,
  minScrollbarLength: 20
};

export function jwtTokenGetter() {
  return localStorage.getItem('token');
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    NotificationComponent,
    OptionsComponent,
    MenuComponent,
    AdminLayoutComponent,
    AuthLayoutComponent,
    AccordionAnchorDirective,
    AccordionLinkDirective,
    AccordionDirective
    ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(AppRoutes),
    FormsModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    }),
    LoadingBarRouterModule,
    MatSidenavModule,
    MatCardModule,
    MatMenuModule,
    MatCheckboxModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatTabsModule,
    MatListModule,
    MatSlideToggleModule,
    MatSelectModule,
    MatProgressBarModule,
    FlexLayoutModule,
    BidiModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: jwtTokenGetter ,
        whitelistedDomains: ['localhost:4201'],
        blacklistedRoutes: ['localhost:4201/home/login']
       }
    }),
    AgmCoreModule.forRoot({apiKey: 'YOURAPIKEY'}),
    PerfectScrollbarModule
  ],
  providers: [
    { provide: StudentsService,           useClass: StudentsService },
    { provide: PaymentsService,           useClass: PaymentsService },
    { provide: SettingsService,           useClass: SettingsService },
    { provide: ClassService,           useClass: ClassService },
    { provide: SessionsService,           useClass: SessionsService },
    { provide: AttendanceService,           useClass: AttendanceService },
    { provide: AuthGuardService,           useClass: AuthGuardService },
    { provide: AuthServiceService,           useClass: AuthServiceService },
    { provide: UsersService,           useClass: UsersService },
    { provide: JwtHelperService,           useClass: JwtHelperService },
    { provide: PERFECT_SCROLLBAR_CONFIG,  useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Loginroutes } from './login-routing.module';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule, MatInputModule, MatButtonModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    RouterModule.forChild(Loginroutes)
  ],
  declarations: [LoginComponent]
})
export class LoginModule { }

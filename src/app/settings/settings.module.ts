import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Form imports
import {
  MatCardModule,
  MatIconModule,
  MatRadioModule,
  MatInputModule,
  MatButtonModule,
  MatProgressBarModule,
  MatToolbarModule,
  MatMenuModule,
  MatSelectModule,
  MatListModule} from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SettingsRoutingModule } from './settings-routing.module';
import { EditSettingsComponent } from './edit-settings/edit-settings.component';

@NgModule({
  imports: [
    CommonModule,
    SettingsRoutingModule,
    MatCardModule,
    MatIconModule,
    MatRadioModule,
    MatInputModule,
    MatButtonModule,
    MatProgressBarModule,
    MatToolbarModule,
    MatMenuModule,
    MatSelectModule,
    MatListModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [EditSettingsComponent]
})
export class SettingsModule { }

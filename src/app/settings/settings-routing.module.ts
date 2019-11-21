import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditSettingsComponent } from './edit-settings/edit-settings.component';

const routes: Routes = [  {
    path: '',
    component: EditSettingsComponent,
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingsRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AttTableComponent } from './att-table/att-table.component';

const routes: Routes = [{
  path: ':classID',
  component: AttTableComponent,
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AttendanceRoutingModule { }

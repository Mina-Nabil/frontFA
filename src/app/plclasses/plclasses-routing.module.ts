import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlClassesTableComponent } from './pl-classes-table/pl-classes-table.component'
import { PlClassesEditComponent } from './pl-classes-edit/pl-classes-edit.component';

const routes: Routes = [
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

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PLClassesRoutingModule { }

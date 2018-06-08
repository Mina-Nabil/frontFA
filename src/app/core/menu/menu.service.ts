import { Injectable } from '@angular/core';
import { ClassService } from 'src/app/class.service';


export interface BadgeItem {
  type: string;
  value: string;
}

export interface ChildrenItems {
  state: string;
  name: string;
  type?: string;
}

export interface Menu {
  state: string;
  name: string;
  type: string;
  icon: string;
  badge?: BadgeItem[];
  children?: ChildrenItems[];
}

const MENUITEMS: Menu[] = [
  {
    state: '/',
    name: 'HOME',
    type: 'link',
    icon: 'explore'
  }
];



@Injectable()
export class MenuService {


  constructor(private _classService: ClassService) {
    let classesRoutes = [];
    this._classService.getClassesRoutes().subscribe(data => {
                                        classesRoutes = data;
                                        classesRoutes.push({
                                          state: 'add',
                                          name: 'Add New Player'
                                        });
                                        MENUITEMS.push({
                                          state:  'students',
                                          name:   'Players',
                                          type:   'sub',
                                          icon:   'person',
                                          children: classesRoutes
                                        });
                                      } ,  error => console.log('Error: ', +error));
    MENUITEMS.push({
               state:   'classes',
               name:    'Classes',
               type:    'sub',
               icon:    'group',
               children: [{
                 state: 'table',
                 name:  'Show Classes',
                 type:  'link'
               },{
                 state: 'add',
                 name:  'Add Class',
                 type:  'link'
               }]}) ;


  }

  getAll(): Menu[] {

    return MENUITEMS;
  }

  add(menu) {
    MENUITEMS.push(menu);
  }

}

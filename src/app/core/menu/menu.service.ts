import { Injectable } from '@angular/core';
import { ClassService } from 'src/app/resources/class.service';


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
    let PLclassesRoutes = [];
    let SsclassesRoutes = [];
    this._classService.getClassesRoutes().subscribe(data => {
                                        PLclassesRoutes = data.slice();
                                        PLclassesRoutes.splice(0,0,{
                                          state: 'add',
                                          name: 'Add New Player'
                                        });
                                        MENUITEMS.push({
                                          state:  'students',
                                          name:   'Players',
                                          type:   'sub',
                                          icon:   'sentiment_satisfied_alt',
                                          children: PLclassesRoutes
                                        });
                                        SsclassesRoutes = data.slice();
                                        SsclassesRoutes.splice(0,0,{
                                          state: 'add',
                                          name: 'Add New Session'
                                        });
                                        SsclassesRoutes.splice(0,0,{
                                          state: 'cal',
                                          name: 'Sessions Calendar'
                                        });
                                        MENUITEMS.push({
                                          state:  'trsessions',
                                          name:   'Sessions',
                                          type:   'sub',
                                          icon:   'fitness_center',
                                          children: SsclassesRoutes
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

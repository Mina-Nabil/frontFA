import { Component, ChangeDetectionStrategy, Inject, ViewChild, TemplateRef } from '@angular/core';
import { MatDialog, MatDialogRef, MatDialogConfig, MAT_DIALOG_DATA } from '@angular/material';



import {
  startOfDay,
  endOfDay,
  subDays,
  addDays,
  endOfMonth,
  isSameDay,
  isSameMonth,
  addHours
} from 'date-fns';

import { Subject } from 'rxjs/Subject';

import {
  CalendarEvent,
  CalendarEventAction,
  CalendarEventTimesChangedEvent
} from 'angular-calendar';
import { SessionsService } from '../../resources/sessions.service';


let colors : any = [
  {
    name: 'red',
    id: 0,
    primary: '#ad2121',
    secondary: '#FAE3E3'
  },
   {
    name: 'blue',
    id: 1,
    primary: '#1e90ff',
    secondary: '#D1E8FF'
  },
   {
    name: 'yellow',
    id: 2,
    primary: '#e3bc08',
    secondary: '#FDF1BA'
  },
   {
    name: 'green',
    id: 3,
    primary: '#29AB87',
    secondary: '#29AB87',
  },{
    name: 'pink',
    id: 4,
    primary: '#F52887',
    secondary: '#F52887'
  },{
    name: 'indigo',
    id: 5,
    primary: '#4B0082',
    secondary: '#4B0082'
  },{
    name: 'black',
    id: 6,
    primary: '#000000',
    secondary: '#000000'
  }
];

@Component({
  selector: 'app-ss-calendar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './ss-calendar.component.html',
  styleUrls: ['./ss-calendar.component.scss']
})
export class SsCalendarComponent {

  lastCloseResult: string;
  actionsAlignment: string;
  config: MatDialogConfig = {
    disableClose: false,
    width: '',
    height: '',
    position: {
      top: '',
      bottom: '',
      left: '',
      right: ''
    },
    data: {
      action: '',
      event: []
    }
  };
  numTemplateOpens = 0;

  view = 'month';

  viewDate: Date = new Date();

  modalData: {
    action: string,
    event: CalendarEvent
  };

  refresh: Subject<any> = new Subject();

  events: CalendarEvent[] = [];

  activeDayIsOpen = true;

  constructor(public dialog: MatDialog, private _sessionService: SessionsService) {

    this._sessionService.getCalSessions(2).subscribe(data => {
      for(let event of data){
        this.events.push({
          end : new Date (event['end']),
          start : new Date (event['start']),
          title : event['title'],
          color: this.getColor(event['color'])
        })
      }
    } );

  }

  dayClicked({date, events}: {date: Date, events: CalendarEvent[]}): void {

    if (isSameMonth(date, this.viewDate)) {
      if (
        (isSameDay(this.viewDate, date) && this.activeDayIsOpen === true) ||
        events.length === 0
      ) {
        this.activeDayIsOpen = false
      } else {
        this.activeDayIsOpen = true;
        this.viewDate = date;
      }
    }
  }


  getColor(id): any {

    for(let color of colors){

    if(id == color.id) return color;
    }
  }

}

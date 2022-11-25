import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import {
  startOfDay,
  endOfDay,
  endOfMonth,
  isSameDay,
  isSameMonth,
  startOfMonth,
  startOfWeek,
  endOfWeek,
  format,
  differenceInMinutes,
  startOfHour,
  isAfter,
  parseISO,
  addMinutes,
  subMinutes,
  isToday,
  formatISO,
} from 'date-fns';

import {
  CalendarEvent,
  CalendarEventAction,
  CalendarEventTimesChangedEvent,
  CalendarEventTitleFormatter,
  CalendarView
} from 'angular-calendar';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {

  schedulerContainer: boolean = true;
  timetableContainer: boolean = false;
  viewDate: Date = new Date();
  view = 'week';
  events: any[];
  toggleTask = 'Toggle Task Selection';
  dayCalendarStartHour: number = 8;
  dayCalendarEndHour: number = 18;
  refresh: Subject<any> = new Subject();
  hourSegment: number = 6;

  constructor() { }

  ngOnInit(): void {
    console.log(this.viewDate);
    this.events = [
      {
        id: 'asd123easdfasd',
        start: new Date(),
        end: new Date(),
        title: 'test meeting',
        color: {
          primary: '#0084ff',
          secondary: '#e5fae5'
        },
        
      }
    ]
  }

  changeTab(event){
    switch(event.label){
      case 'Timetable':
        this.timetableContainer = true;
        this.schedulerContainer = false;
        break;
      case 'Scheduler':  
        this.schedulerContainer = true;
        this.timetableContainer = false;
        break;
    }
  }

  clickHourSegment(value){
    console.log(value);
  }

  clickMenu(){

  }

  setView(value: string){
    this.view = value;
  }

  fetchEvents(){
    
  }

  clickSetting(){

  }

}

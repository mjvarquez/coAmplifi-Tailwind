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

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {

  schedulerContainer: boolean = true;
  timetableContainer: boolean = false;
  viewDate: Date = new Date();
  events: any[];
  dayCalendarStartHour: number = 8;
  dayCalendarEndHour: number = 18;

  constructor(private router: Router) { }

  ngOnInit(): void {
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

}

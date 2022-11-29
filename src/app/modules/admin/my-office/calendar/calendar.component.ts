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

import { Options } from '@angular-slider/ngx-slider';

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
  styleUrls: ['./calendar.component.scss'],
  styles: [
    `
      .drag-active {
        position: relative;
        z-index: 999 !important;
        pointer-events: none;
        top:60px !important;
        left:25px !important;
      }
      .drag-over {
        background-color: #eee !important;
      }
    `,
  ],
})
export class CalendarComponent implements OnInit {
  drawerMode: 'over' | 'side' = 'side';
  drawerOpened: boolean = false;
  panelOpenState = false;
  dayCalendarStartHour: number = 8;
  dayCalendarEndHour: number = 18;
  dayCalendarOptions: Options = {
    showTicksValues: true,
    stepsArray: [
      { value: 0, legend: "12am" },
      { value: 2, legend: "" },
      { value: 4, legend: "4am" },
      { value: 6, legend: "" },
      { value: 8, legend: "8am" },
      { value: 10, legend: "" },
      { value: 12, legend: "12pm" },
      { value: 14, legend: "" },
      { value: 16, legend: "16pm" },
      { value: 18, legend: "" },
      { value: 20, legend: "20pm" },
      { value: 22, legend: "" },
      { value: 24, legend: "24pm" }
    ]
  };

  hourSegment: number = 6;
  hourSegmentOptions: Options = {
    showTicksValues: true,
    stepsArray: [
      { value: 1, legend: "60(min)" },
      { value: 2, legend: "30(min)" },
      { value: 4, legend: "15(min)" },
      { value: 6, legend: "10(min)" },
      { value: 12, legend: "5(min)" },
      { value: 20, legend: "3(min)" },
      { value: 30, legend: "2(min)" },
      { value: 60, legend: "1(min)" }
    ]
  };

  schedulerContainer: boolean = true;
  showInactiveTime: boolean = false;
  showSetting:boolean = false;
  timetableContainer: boolean = false;
  viewDate: Date = new Date();
  view = 'week';
  events: any[];
  toggleTask = 'Toggle Task Selection';
  refresh: Subject<any> = new Subject();

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

  onOpenedChange(opened: any): void {
    this.drawerOpened = opened;
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
    this.showSetting = !this.showSetting;
  }

}

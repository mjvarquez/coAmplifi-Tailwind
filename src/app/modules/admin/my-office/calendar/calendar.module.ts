import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { CalendarComponent } from './calendar.component';
import { MyOfficeSharedModule } from '../shared/shared.module';
import { FuseAlertModule } from '@fuse/components/alert';
import { NgxSliderModule } from '@angular-slider/ngx-slider';
import { FuseCardModule } from '@fuse/components/card';
// import { CalendarModule, DateAdapter } from 'angular-calendar';
// import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';

const CalendarRoutes: Route[] = [
  {
      path     : '',
      title: 'My Calendar',
      component: CalendarComponent,
      data: {
        sub_menu: [
            {
                label: 'Scheduler', 
                icon: 'mat_outline:task',  
                url: '/task/myTaskPlanner'
            },
            {
                label: 'Timetable', 
                icon: 'mat_outline:calendar_today',
                url: '/task/myClipboard/planner'
            }
        ]
    },
  }
];

@NgModule({
  declarations: [
    CalendarComponent
  ],
  imports: [
    CommonModule,
    FuseAlertModule,
    MyOfficeSharedModule,
    NgxSliderModule,
    FuseCardModule,
    RouterModule.forChild(CalendarRoutes),
    
  ]
})
export class CalendarModule { }

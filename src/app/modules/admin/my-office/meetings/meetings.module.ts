import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MeetingsComponent } from './meetings.component';
import { Route, RouterModule } from '@angular/router';
import { SharedModule } from 'app/shared/shared.module';
import { MyOfficeSharedModule } from '../shared/shared.module';

const MeetingsRoutes: Route[] = [
  {
      path     : '',
      title: 'My Meetings',
      component: MeetingsComponent,
      data: {
        sub_menu: [
            {
                label: 'Overview', 
                icon: 'mat_outline:groups'
            },
            {
                label: 'Meetings', 
                icon: 'mat_outline:list'
            }
        ]
    },
  }
];

@NgModule({
  declarations: [
    MeetingsComponent
  ],
  imports: [
    CommonModule,
    MyOfficeSharedModule,
    RouterModule.forChild(MeetingsRoutes),
  ]
})
export class MeetingsModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MeetingsComponent } from './meetings.component';
import { Route, RouterModule } from '@angular/router';
import { MyOfficeSharedModule } from '../shared/shared.module';
import { FuseCardModule } from '@fuse/components/card';
import { MeetingFormComponent } from './components/meeting-form/meeting-form.component';

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
    MeetingsComponent,
    MeetingFormComponent
  ],
  imports: [
    CommonModule,
    MyOfficeSharedModule,
    FuseCardModule,
    RouterModule.forChild(MeetingsRoutes),
  ],
  exports: [
    FuseCardModule,
    MeetingFormComponent
  ]
})
export class MeetingsModule { }

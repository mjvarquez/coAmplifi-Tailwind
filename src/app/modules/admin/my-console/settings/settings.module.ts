import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { MeetingsComponent } from './meetings.component';
import { Route, RouterModule } from '@angular/router';

import { FuseCardModule } from '@fuse/components/card';
import { SettingsComponent } from './settings.component';



const SettingRoutes: Route[] = [
  {
      path     : '',
      title: 'Settings',
      component: SettingsComponent,
    //   data: {
    //     sub_menu: [
    //         {
    //             label: 'Overview', 
    //             icon: 'mat_outline:groups'
    //         },
    //         {
    //             label: 'Meetings', 
    //             icon: 'mat_outline:list'
    //         }
    //     ]
    // },
  }
];

@NgModule({
  declarations: [
   SettingsComponent
  ],
  imports: [
    RouterModule.forChild(SettingRoutes),
  ],
  exports: []
})

export class SettingsModule {}

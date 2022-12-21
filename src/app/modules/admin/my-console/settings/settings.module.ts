import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { MeetingsComponent } from './meetings.component';
import { Route } from '@angular/router';

import { FuseCardModule } from '@fuse/components/card';
import { SettingsComponent } from 'app/layout/common/settings/settings.component';


const MeetingsRoutes: Route[] = [
//   {
//       path     : '',
//       title: 'My Meetings',
//       component: MeetingsComponent,
//       data: {
//         sub_menu: [
//             {
//                 label: 'Overview', 
//                 icon: 'mat_outline:groups'
//             },
//             {
//                 label: 'Meetings', 
//                 icon: 'mat_outline:list'
//             }
//         ]
//     },
//   }
];

@NgModule({
  declarations: [
   SettingsComponent
  ],
  imports: [],
  exports: []
})

export class SettingsModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { FuseAlertModule } from '@fuse/components/alert';
import { NgxSliderModule } from '@angular-slider/ngx-slider';
import { FuseCardModule } from '@fuse/components/card';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { SharedModule } from 'app/shared/shared.module';
import { MatListModule } from '@angular/material/list';
import { PersonalComponent } from './personal.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

const PersonalRoutes: Route[] = [
    {
        path: '',
        title: 'Personal',
        component: PersonalComponent,
        // data: {
        //     sub_menu: [
        //         {
        //             label: 'Scheduler',
        //             icon: 'mat_outline:task',
        //             url: '/task/myTaskPlanner'
        //         },
        //         {
        //             label: 'Timetable',
        //             icon: 'mat_outline:calendar_today',
        //             url: '/task/myClipboard/planner'
        //         }
        //     ]
        // },
    }
];

@NgModule({
    declarations: [
        PersonalComponent,
    ],
    imports: [
        CommonModule,
        FuseAlertModule,
        NgxSliderModule,
        MatListModule,
        SharedModule,
        MatSlideToggleModule,
        FuseCardModule,
        MatFormFieldModule,
        MatInputModule,
        RouterModule.forChild(PersonalRoutes),
    ]
})
export class PersonalModule { }
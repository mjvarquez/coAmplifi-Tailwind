import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { FuseAlertModule } from '@fuse/components/alert';
import { NgxSliderModule } from '@angular-slider/ngx-slider';
import { FuseCardModule } from '@fuse/components/card';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { SharedModule } from 'app/shared/shared.module';
import { MatDialogModule } from '@angular/material/dialog';
import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PersonalComponent } from './personal.component';
import { PersonalDialogComponent } from './components/personal-dialog/personal-dialog.component';


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
        PersonalDialogComponent,
    ],
    imports: [
        CommonModule,
        FuseAlertModule,
        NgxSliderModule,
        ReactiveFormsModule,
        FormsModule,
        MatListModule,
        SharedModule,
        MatSlideToggleModule,
        MatDialogModule,
        FuseCardModule,
        MatFormFieldModule,
        MatInputModule,
        RouterModule.forChild(PersonalRoutes),
    ]
})
export class PersonalModule { }
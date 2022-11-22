import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { DocketComponent } from './docket.component';
import { BreadcrumbComponent } from '../../shared/breadcrumb/breadcrumb.component';
import { MyOfficeSharedModule } from '../../shared/shared.module';
import { ClipboardSharedModule } from '../shared/shared.module';
import {MatChipsModule} from '@angular/material/chips';

const DocketRoutes: Route[] = [
    {
        path     : '',
        title: 'Queue',
        data: {
            sub_menu: [
                {
                    label: 'My Clipboard', 
                    icon: 'mat_outline:calendar_view_week',  
                    url: '/task/myClipboard/kanban'
                },
                {
                    label: 'My Planner', 
                    icon: 'mat_outline:task',
                    url: '/task/myClipboard/planner'
                },
                {
                    label: 'Queue(0)', 
                    icon: 'mat_outline:upcoming',
                    url: '/task/myClipboard/docket'
                },
                {
                    label: 'Timeclock Editor',
                    icon: 'mat_outline:edit_calendar',
                    url: '/task/myClipboard/taskEditor'
                },
            ]
        },
        component: DocketComponent,
    }
];

@NgModule({
    declarations: [
        DocketComponent
    ],
    imports     : [
        ClipboardSharedModule,
        MyOfficeSharedModule,
        RouterModule.forChild(DocketRoutes)
    ]
})
export class DocketModule
{
}

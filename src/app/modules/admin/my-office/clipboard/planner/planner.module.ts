import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { PlannerComponent } from './planner.component';
import { BreadcrumbComponent } from '../../shared/breadcrumb/breadcrumb.component';
import { ClipboardSharedModule } from '../shared/shared.module';
import { MyOfficeSharedModule } from '../../shared/shared.module';

const plannerRoutes: Route[] = [
    {
        path     : '',
        title: 'My Planner',
        component: PlannerComponent,
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
    }
];

@NgModule({
    declarations: [
        PlannerComponent
    ],
    imports     : [
        ClipboardSharedModule,
        MyOfficeSharedModule,
        RouterModule.forChild(plannerRoutes)
    ]
})
export class PlannerModule
{
}

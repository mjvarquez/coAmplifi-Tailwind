import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { TaskEditorComponent } from './task-editor.component';
import { BreadcrumbComponent } from '../../shared/breadcrumb/breadcrumb.component';
import {  ClipboardSharedModule } from '../shared/shared.module';
import { MyOfficeSharedModule } from '../../shared/shared.module';
import {MatTableModule} from '@angular/material/table';
import {CdkTableModule} from '@angular/cdk/table';
import { SharedModule } from 'app/shared/shared.module';
const TaskEditorRoutes: Route[] = [
    {
        path     : '',
        title: 'Timeclock Editor',
        component: TaskEditorComponent,
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
        TaskEditorComponent
    ],
    imports     : [
        ClipboardSharedModule,
        MyOfficeSharedModule,
        SharedModule,
        CdkTableModule,
        MatTableModule,
        RouterModule.forChild(TaskEditorRoutes)
    ]
})
export class TaskEditorModule
{
}

import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { TaskEditorComponent } from './task-editor.component';
import { BreadcrumbComponent } from '../../shared/breadcrumb/breadcrumb.component';
import { ClipboardSharedModule } from '../../shared/shared.module';

const TaskEditorRoutes: Route[] = [
    {
        path     : '',
        title: 'Timeclock Editor',
        component: TaskEditorComponent,
        
    }
];

@NgModule({
    declarations: [
        TaskEditorComponent
    ],
    imports     : [
        ClipboardSharedModule,
        RouterModule.forChild(TaskEditorRoutes)
    ]
})
export class TaskEditorModule
{
}

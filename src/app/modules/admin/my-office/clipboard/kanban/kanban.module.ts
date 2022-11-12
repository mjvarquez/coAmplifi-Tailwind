import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { KanbanComponent } from './kanban.component';
import { BreadcrumbComponent } from '../../shared/breadcrumb/breadcrumb.component';
import { ClipboardSharedModule } from '../../shared/shared.module';

const kanbanRoutes: Route[] = [
    {
        path     : '',
        title: 'My Clipboard',
        component: KanbanComponent,
        
    }
];

@NgModule({
    declarations: [
        KanbanComponent
    ],
    imports     : [
        ClipboardSharedModule,
        RouterModule.forChild(kanbanRoutes)
    ]
})
export class KanbanModule
{
}

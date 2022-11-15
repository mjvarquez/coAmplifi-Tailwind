import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { KanbanComponent } from './kanban.component';
import { BreadcrumbComponent } from '../../shared/breadcrumb/breadcrumb.component';
import { ClipboardSharedModule } from '../../shared/shared.module';
import { TasklistItemComponent } from './components/tasklist-item/tasklist-item.component';
import { TasklistComponent } from './components/tasklist/tasklist.component';

const kanbanRoutes: Route[] = [
    {
        path     : '',
        title: 'My Clipboard',
        component: KanbanComponent,
        
    }
];

@NgModule({
    declarations: [
        KanbanComponent,
        TasklistItemComponent,
        TasklistComponent
    ],
    imports     : [
        ClipboardSharedModule,
        RouterModule.forChild(kanbanRoutes)
    ]
})
export class KanbanModule
{
}

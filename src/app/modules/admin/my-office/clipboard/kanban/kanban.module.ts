import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { KanbanComponent } from './kanban.component';
import { BreadcrumbComponent } from '../../shared/breadcrumb/breadcrumb.component';
import { ClipboardSharedModule } from '../../shared/shared.module';
import { TasklistItemComponent } from './components/tasklist-item/tasklist-item.component';
import { TasklistComponent } from './components/tasklist/tasklist.component';
import {MatExpansionModule} from '@angular/material/expansion';
import { FuseCardModule } from '@fuse/components/card';
import { KanbanCardComponent } from './components/kanban-card/kanban-card.component';
import { KanbanEmptyCardComponent } from './components/kanban-empty-card/kanban-empty-card.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CommonModule } from '@angular/common';

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
        TasklistComponent,
        KanbanCardComponent,
        KanbanEmptyCardComponent
    ],
    imports     : [
        CommonModule,
        ClipboardSharedModule,
        MatExpansionModule,
        FuseCardModule,
        MatFormFieldModule,
        MatInputModule,
        RouterModule.forChild(kanbanRoutes)
    ]
})
export class KanbanModule
{
}

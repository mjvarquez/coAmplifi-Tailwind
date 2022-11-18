import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { KanbanComponent } from './kanban.component';
import { BreadcrumbComponent } from '../../shared/breadcrumb/breadcrumb.component';
import { MyOfficeSharedModule } from '../../shared/shared.module';
import {MatExpansionModule} from '@angular/material/expansion';
import { FuseCardModule } from '@fuse/components/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CommonModule } from '@angular/common';
import {MatSelectModule} from '@angular/material/select';
import { ClipboardSharedModule } from '../shared/shared.module';

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
        CommonModule,
        MyOfficeSharedModule,
        ClipboardSharedModule,
        MatExpansionModule,
        FuseCardModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        RouterModule.forChild(kanbanRoutes)
    ]
})
export class KanbanModule
{
}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TableComponent } from './table/table.component';
import {MatTableModule} from '@angular/material/table';
import {CdkTableModule} from '@angular/cdk/table';
import { KanbanTaskCalendarComponent } from './kanban-task-calendar/kanban-task-calendar.component';
import { CalendarComponent } from 'app/modules/admin/my-office/calendar/calendar.component';
@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MatTableModule,
        CdkTableModule
    ],
    exports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MatTableModule,
        CdkTableModule,
        TableComponent,
        KanbanTaskCalendarComponent
    ],
    declarations: [
      TableComponent,
      KanbanTaskCalendarComponent
    ]
})
export class SharedModule
{
}

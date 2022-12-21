import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TableComponent } from './table/table.component';
import {MatTableModule} from '@angular/material/table';
import {CdkTableModule} from '@angular/cdk/table';
import { KanbanTaskCalendarComponent } from './kanban-task-calendar/kanban-task-calendar.component';
import { CalendarComponent } from 'app/modules/admin/my-office/calendar/calendar.component';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTabsModule } from '@angular/material/tabs';
import { SubMenuComponent } from './sub-menu/sub-menu.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MatTableModule,
        MatIconModule,
        CdkTableModule,
        MatButtonModule,
        MatToolbarModule,
        CalendarModule.forRoot({ 
            provide: DateAdapter, 
            useFactory: adapterFactory 
        }),
        MatTabsModule
    ],
    exports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MatTableModule,
        CdkTableModule,
        TableComponent,
        KanbanTaskCalendarComponent,
        CalendarModule,
        MatIconModule,
        MatButtonModule,
        MatToolbarModule,
        MatTabsModule
    ],
    declarations: [
      TableComponent,
      KanbanTaskCalendarComponent,
      SubMenuComponent
    ]
})
export class SharedModule
{
}

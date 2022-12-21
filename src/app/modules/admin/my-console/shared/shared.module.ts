import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { SubMenuComponent } from './sub-menu/sub-menu.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import {MatTabsModule} from '@angular/material/tabs';
import { RouterModule } from '@angular/router';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import { FuseScrollbarModule } from '@fuse/directives/scrollbar';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { MatExpansionModule } from '@angular/material/expansion';

@NgModule({
    declarations: [
        BreadcrumbComponent,
        SubMenuComponent
    ],
    imports: [
        MatIconModule,
        MatButtonModule,
        MatMenuModule,
        MatTabsModule,
        RouterModule,
        CommonModule,
        MatSidenavModule,
        MatToolbarModule,
        FuseScrollbarModule,
        CalendarModule.forRoot({ 
            provide: DateAdapter, 
            useFactory: adapterFactory 
        }),
    ],
    exports: [
        BreadcrumbComponent,
        SubMenuComponent,
        MatIconModule,
        MatButtonModule,
        MatMenuModule,
        MatExpansionModule,
        MatTabsModule,
        MatSidenavModule,
        MatToolbarModule,
        FuseScrollbarModule,
        CalendarModule
    ]
})
export class MyConsoleModule
{
}

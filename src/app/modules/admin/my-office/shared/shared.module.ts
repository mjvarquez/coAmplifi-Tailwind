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
        RouterModule
    ],
    exports: [
        BreadcrumbComponent,
        SubMenuComponent,
        MatIconModule,
        MatButtonModule,
        MatMenuModule,
        MatTabsModule
    ]
})
export class ClipboardSharedModule
{
}

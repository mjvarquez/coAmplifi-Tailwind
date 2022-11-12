import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { SubMenuComponent } from './sub-menu/sub-menu.component';

@NgModule({
    declarations: [
        BreadcrumbComponent,
        SubMenuComponent
    ],
    imports: [],
    exports: [
        BreadcrumbComponent,
        SubMenuComponent
    ]
})
export class ClipboardSharedModule
{
}

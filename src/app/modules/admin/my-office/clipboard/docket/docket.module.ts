import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { DocketComponent } from './docket.component';
import { BreadcrumbComponent } from '../../shared/breadcrumb/breadcrumb.component';
import { MyOfficeSharedModule } from '../../shared/shared.module';
import { ClipboardSharedModule } from '../shared/shared.module';
import {MatChipsModule} from '@angular/material/chips';

const DocketRoutes: Route[] = [
    {
        path     : '',
        title: 'Queue',
        component: DocketComponent,
        
    }
];

@NgModule({
    declarations: [
        DocketComponent
    ],
    imports     : [
        ClipboardSharedModule,
        MyOfficeSharedModule,
        RouterModule.forChild(DocketRoutes)
    ]
})
export class DocketModule
{
}

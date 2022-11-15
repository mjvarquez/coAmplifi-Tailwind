import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { DocketComponent } from './docket.component';
import { BreadcrumbComponent } from '../../shared/breadcrumb/breadcrumb.component';
import { ClipboardSharedModule } from '../../shared/shared.module';

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
        RouterModule.forChild(DocketRoutes)
    ]
})
export class DocketModule
{
}

import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { PlannerComponent } from './planner.component';
import { BreadcrumbComponent } from '../../shared/breadcrumb/breadcrumb.component';
import { ClipboardSharedModule } from '../../shared/shared.module';

const plannerRoutes: Route[] = [
    {
        path     : '',
        title: 'My Planner',
        component: PlannerComponent,
        
    }
];

@NgModule({
    declarations: [
        PlannerComponent
    ],
    imports     : [
        ClipboardSharedModule,
        RouterModule.forChild(plannerRoutes)
    ]
})
export class PlannerModule
{
}

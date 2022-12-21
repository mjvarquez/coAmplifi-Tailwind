import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { MeetingsComponent } from './meetings.component';
import { Route, RouterModule } from '@angular/router';
import { FuseCardModule } from '@fuse/components/card';
import { SettingsComponent } from './settings.component';
import { MyConsoleModule } from '../shared/shared.module';
import { WageAndHourComponent } from './components/wage-and-hour/wage-and-hour.component';
import { HolidaysComponent } from './components/holidays/holidays.component';
import { PayPeriodComponent } from './components/pay-period/pay-period.component';
import { DepartmentComponent } from './components/department/department.component';
import { MatCheckboxModule } from '@angular/material/checkbox';



const SettingRoutes: Route[] = [
  {
      path: '',
      title: 'Settings',
      component: SettingsComponent,
      data: {
        sub_menu: [
            {
                label: 'Wage & Hour', 
                // icon: 'mat_outline:groups'
            },
            {
                label: 'Holidays', 
                // icon: 'mat_outline:list'
            },
            {
                label: 'Pay Period', 
                // icon: 'mat_outline:list'
            },
            {
                label: 'Department', 
                // icon: 'mat_outline:list'
            },
        ]
    },
  }
];

@NgModule({
    declarations: [
        SettingsComponent,
        WageAndHourComponent,
        HolidaysComponent,
        PayPeriodComponent,
        DepartmentComponent
    ],
    imports: [
        MatCheckboxModule,
        CommonModule,
        MyConsoleModule,
        RouterModule.forChild(SettingRoutes),
        FuseCardModule
    ],
    exports: [],
})

export class SettingsModule {}

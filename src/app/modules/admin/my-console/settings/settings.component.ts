import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent implements OnInit {

  drawerMode: 'over' | 'side' = 'side';
  drawerOpened: boolean = true;
  wageAndHour: boolean = true;
  holidays: boolean = false;
  payPeriod: boolean = false;
  department:  boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  tabChange(data: any){
    switch(data.label){
      case "Wage & Hour": 
        this.wageAndHour = true;
        this. holidays = false;
        this. payPeriod = false;
        this.department = false;
        break;
      case "Holidays": 
        this.wageAndHour = false;
        this. holidays = true;
        this. payPeriod = false;
        this.department = false;
        break;
      case "Pay Period": 
        this.wageAndHour = false;
        this. holidays = false;
        this. payPeriod = true;
        this.department = false;
        break;
      case "Department": 
        this.wageAndHour = false;
        this. holidays = false;
        this. payPeriod = false;
        this.department = true;
        break;
    }
  }

  
  onOpenedChange(opened: any): void {
    this.drawerOpened = opened;
  }

}

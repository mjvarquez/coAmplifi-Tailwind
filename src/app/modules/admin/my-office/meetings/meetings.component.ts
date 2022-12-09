import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-meetings',
  templateUrl: './meetings.component.html',
  styleUrls: ['./meetings.component.scss']
})
export class MeetingsComponent implements OnInit {
  view: string = 'month';
  drawerMode: 'over' | 'side' = 'side';
  drawerOpened: boolean = true;
  viewDate: Date = new Date();
  events: any[];
  overviewContainer: boolean = true;
  meetingsContainer: boolean = false;
  constructor() { }

  onOpenedChange(opened: any): void {
    this.drawerOpened = opened;
  }

  tabChange(){
    this.overviewContainer = !this.overviewContainer;
    this.meetingsContainer = !this.meetingsContainer;
    if(this.meetingsContainer){
      this.drawerOpened = false;
    }
    if(this.overviewContainer){
      this.drawerOpened = true;
    }
  }

  setView(value){
    this.view = value;
  }

  fetchEvents(){

  }

  ngOnInit(): void {
  }

}



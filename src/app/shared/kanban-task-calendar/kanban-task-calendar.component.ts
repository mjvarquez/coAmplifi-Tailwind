import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-kanban-task-calendar',
  templateUrl: './kanban-task-calendar.component.html',
  styleUrls: ['./kanban-task-calendar.component.scss']
})
export class KanbanTaskCalendarComponent implements OnInit {
  viewDate: Date = new Date();
  events: any[];
  view = 'week';
  constructor() { }

  ngOnInit(): void {
  }

  setView(value: string){
    this.view = value;
  }

  fetchEvents(): void{

  }

  clickSetting(): void{

  }
}

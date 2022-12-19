import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-planner',
  templateUrl: './planner.component.html',
  styleUrls: ['./planner.component.scss']
})
export class PlannerComponent implements OnInit {
  panelOpenState = false;
  doingFolderOpen: boolean = false;
  meetingFolderOpen: boolean = false;
  todoFolderOpen: boolean = false;
  doneFolderOpen: boolean = false;
  drawerMode: 'over' | 'side' = 'side';
  drawerOpened: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  onOpenedChange(opened: any): void {
    this.drawerOpened = opened;
  }

}

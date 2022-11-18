import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-planner',
  templateUrl: './planner.component.html',
  styleUrls: ['./planner.component.scss']
})
export class PlannerComponent implements OnInit {
  sideNav = false;
  panelOpenState = false;
  doingFolderOpen: boolean = false;
  meetingFolderOpen: boolean = false;
  todoFolderOpen: boolean = false;
  doneFolderOpen: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  showAddTask(){
    this.sideNav = !this.sideNav;
  }

}

import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {ThemePalette} from '@angular/material/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sub-menu',
  templateUrl: './sub-menu.component.html',
  styleUrls: ['./sub-menu.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SubMenuComponent implements OnInit {
  links = [
    {label: 'My Clipboard', icon: 'mat_outline:calendar_view_week',  
    url: '/task/myClipboard/kanban'},
    {label: 'My Planner', icon: 'mat_outline:task',
    url: '/task/myClipboard/planner'},
    {label: 'Queue(0)', icon: 'mat_outline:upcoming'
    ,url: '/task/myClipboard/docket'},
    {label: 'Timeclock Editor', icon: 'mat_outline:edit_calendar'
    ,url: '/task/myClipboard/taskEditor'},
  ];
  activeLink = '';
  background: ThemePalette = undefined;

  constructor(private router:Router) { }

  ngOnInit(): void {
    this.activeLink = this.router.url;
  }

  clickMenuChangeActive(link){
    this.activeLink = link.url;
    this.router.navigate([link.url]);
  }

}

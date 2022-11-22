import { Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';
import {ThemePalette} from '@angular/material/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-sub-menu',
  templateUrl: './sub-menu.component.html',
  styleUrls: ['./sub-menu.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SubMenuComponent implements OnInit {
  title = '';
  sub_menu:string[] = [];
  activeTab = '';

  @Input() background: string = '';

  @Input() linkTab: boolean = false;
  
  @Output() changeTab = new EventEmitter<any>();
  constructor(private router:Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.data.subscribe((data) => {
      this.sub_menu = data['sub_menu'];
    });
   
    switch(this.linkTab){
      case true:
        this.activeTab = this.router.url;
        break;
      case false:
        this.route.data.subscribe((data) => {
          this.activeTab = data['sub_menu'][0].label;
        })
        break;
    }
  }

  clickMenuChangeActive(tab){
    switch(this.linkTab){
      case true:
        this.activeTab = tab.url;
        this.router.navigate([tab.url]);
      case false:
        this.changeTab.emit(tab);
        this.activeTab = tab.label;
    }
  }

}


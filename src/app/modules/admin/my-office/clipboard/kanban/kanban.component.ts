import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { FuseScrollbarDirective } from '@fuse/directives/scrollbar/scrollbar.directive';

@ViewChildren(FuseScrollbarDirective)
@Component({
  selector: 'app-kanban',
  templateUrl: './kanban.component.html'
})
export class KanbanComponent implements OnInit {
  drawerMode: 'over' | 'side' = 'side';
  drawerOpened: boolean = false;
  constructor() { }
  private _fuseScrollbarDirectives: QueryList<FuseScrollbarDirective>

  ngOnInit(): void {
  }

  onOpenedChange(opened: any): void {
    this.drawerOpened = opened;
  }

}

import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { FuseScrollbarDirective } from '@fuse/directives/scrollbar/scrollbar.directive';

@ViewChildren(FuseScrollbarDirective)
@Component({
  selector: 'app-kanban',
  templateUrl: './kanban.component.html'
})
export class KanbanComponent implements OnInit {
  sideNav:boolean = false;
  constructor() { }
  private _fuseScrollbarDirectives: QueryList<FuseScrollbarDirective>
  
  showTaskList(){
    this.sideNav = !this.sideNav;
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void
{
    // Iterate through the directives and update all of them
    this._fuseScrollbarDirectives.forEach((fuseScrollbarDirective) => {
        fuseScrollbarDirective.update();
    });
}

}

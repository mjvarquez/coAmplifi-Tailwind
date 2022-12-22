import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { FuseScrollbarDirective } from '@fuse/directives/scrollbar/scrollbar.directive';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import * as fromApp from 'store/app.reducer';

@ViewChildren(FuseScrollbarDirective)
@Component({
  selector: 'app-kanban',
  templateUrl: './kanban.component.html'
})
export class KanbanComponent implements OnInit {
  drawerMode: 'over' | 'side' = 'side';
  drawerOpened: boolean = false;
  users$ = Subscription;
  constructor(private store:Store<fromApp.AppState>) { }
  private _fuseScrollbarDirectives: QueryList<FuseScrollbarDirective>

  ngOnInit(): void {
    this.store.select('auth').subscribe(authState => {
      console.log(authState);
    })
  }

  onOpenedChange(opened: any): void {
    this.drawerOpened = opened;
  }

}

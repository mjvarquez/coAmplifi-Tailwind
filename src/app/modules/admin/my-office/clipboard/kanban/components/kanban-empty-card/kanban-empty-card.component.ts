import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-kanban-empty-card',
  templateUrl: './kanban-empty-card.component.html',
  styleUrls: ['./kanban-empty-card.component.scss']
})
export class KanbanEmptyCardComponent implements OnInit {
  @Input() errorTitle = '';
  constructor() { }

  ngOnInit(): void {
  }

}

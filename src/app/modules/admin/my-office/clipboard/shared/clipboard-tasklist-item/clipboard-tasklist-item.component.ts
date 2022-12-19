import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-clipboard-tasklist-item',
  templateUrl: './clipboard-tasklist-item.component.html',
  styleUrls: ['./clipboard-tasklist-item.component.scss']
})
export class ClipboardTasklistItemComponent implements OnInit {
  @Input() favorite = false;
  constructor() { }

  ngOnInit(): void {
  }

}

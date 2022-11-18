import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clipboard-tasklist',
  templateUrl: './clipboard-tasklist.component.html',
  styleUrls: ['./clipboard-tasklist.component.scss']
})
export class ClipboardTasklistComponent implements OnInit {
  panelOpenState = false;
  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-clipboard-empty-card',
  templateUrl: './clipboard-empty-card.component.html',
  styleUrls: ['./clipboard-empty-card.component.scss']
})
export class ClipboardEmptyCardComponent implements OnInit {
  @Input() errorTitle = '';
  constructor() { }

  ngOnInit(): void {
  }

}

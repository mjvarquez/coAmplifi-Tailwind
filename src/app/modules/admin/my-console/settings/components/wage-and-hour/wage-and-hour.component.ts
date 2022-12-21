import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wage-and-hour',
  templateUrl: './wage-and-hour.component.html',
  styleUrls: ['./wage-and-hour.component.scss']
})
export class WageAndHourComponent implements OnInit {

  countries = ["France", "Philippines", "United States"]

  constructor() { }

  ngOnInit(): void {
  }


}

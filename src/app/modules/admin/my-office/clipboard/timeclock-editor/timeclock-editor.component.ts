import { Component, OnInit } from '@angular/core';
import {DataSource} from '@angular/cdk/collections';
import {BehaviorSubject, Observable} from 'rxjs';

export interface PeriodicElement {
  clock_in_out: string;
  task: string;
  period_type: string;
  work_hours: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {clock_in_out: '00:00 - 23:59', task: 'Non-working', period_type: 'Non Working', work_hours: '23:59:59'},
];

@Component({
  selector: 'app-timeclock-editor',
  templateUrl: './timeclock-editor.component.html',
  styleUrls: ['./timeclock-editor.component.scss']
})
export class TimeClockEditorComponent implements OnInit {
  displayedColumns: string[] = ['clock_in_out', 'task', 'period_type', 'work_hours', 'action'];
  dataSource = new ExampleDataSource();

  constructor() { }

  ngOnInit(): void {
  }

}

export class ExampleDataSource extends DataSource<PeriodicElement> {
  /** Stream of data that is provided to the table. */
  data = new BehaviorSubject<PeriodicElement[]>(ELEMENT_DATA);

  /** Connect function called by the table to retrieve one stream containing the data to render. */
  connect(): Observable<PeriodicElement[]> {
    return this.data;
  }

  disconnect() {}
}

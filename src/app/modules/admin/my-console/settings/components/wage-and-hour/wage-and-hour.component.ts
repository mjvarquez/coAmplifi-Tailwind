import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { map, Observable, of, startWith } from 'rxjs';
import { countries } from './countries';

@Component({
  selector: 'app-wage-and-hour',
  templateUrl: './wage-and-hour.component.html',
  styleUrls: ['./wage-and-hour.component.scss']
})
export class WageAndHourComponent implements OnInit {

  // countries = ["France", "Philippines", "United States"];
  isShowSelector: boolean = false;
  isShowDeleteButton: boolean = false;
  isShowClearSelection: boolean = false;
  countryOptions$: Observable<Object> = of({});
  myControl = new FormControl('');
  countryList = [{name: "France"}, {name: "Philippines"}, {name: "United States"}];
  countryChoices = countries

  constructor() {
    this.countryOptions$ = of(countries)
  }

  ngOnInit(): void {
    this.countryOptions$ = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '')),
    );
  }

   private _filter(value: string): Object[] {
    const filterValue = value.toLowerCase();
    return this.countryChoices.filter(option => option.name.toLowerCase().includes(filterValue));
  }


   addCountry(){
    this.isShowSelector = !this.isShowSelector;
  }

  onSelectedChange(selectionEvent: any) {
    console.log("see selected", selectionEvent);
    this.isShowClearSelection = true;
    this.isShowSelector = false;
  }


}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  yearList:string[] = ["2021", "2022", "2023", "2024"]
  countryList: Object[] = [{name: "France"}, {name: "Philippines"}, {name: "United States"}] 

  constructor() { }

}

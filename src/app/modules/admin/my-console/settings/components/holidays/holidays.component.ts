import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { SettingsService } from '../../store/settings.service';

@Component({
  selector: 'app-holidays',
  templateUrl: './holidays.component.html',
  styleUrls: ['./holidays.component.scss']
})
export class HolidaysComponent implements OnInit {

  holidaysForm!: FormGroup;
  newHolidayForm!: FormGroup;
  countryList = this.settingsService.countryList;
  yearList = this.settingsService.yearList
  isShowHolidayForm: boolean = false;
  approvedHolidays = [];
  pendingApprovalHolidays = []; 
  suggestedForAddition = [];
   
  constructor(
    private formBuilder: FormBuilder,
    private settingsService: SettingsService) {
    this.holidaysForm = this.formBuilder.group({
      selectYear: new FormControl('2022'),
      selectCountry: new FormControl('Philippines'),
    });
    this.newHolidayForm = this.formBuilder.group({
      date: ['', Validators.required],
      name: ['', Validators.required],
      description: ['', Validators.required],
    });
   }

  ngOnInit(): void {
  }

  onSelectedApprovalChange(selectionEvent: any){
    console.log("see selection event", selectionEvent)
  }

  onSelectedPendingApprovalChange(selectionEvent: any){
    console.log("see selection event", selectionEvent)
  }

  onSelectedSuggestedAdditionChange(selectionEvent: any){
    console.log("see selection event", selectionEvent)
  }

  saveHoliday(action: string){
    switch(action){
      case "add":
        this.isShowHolidayForm = true;
        break;
      case "save":
        this.isShowHolidayForm = false;
        break;
    }
  }
}

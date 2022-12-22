import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-holidays',
  templateUrl: './holidays.component.html',
  styleUrls: ['./holidays.component.scss']
})
export class HolidaysComponent implements OnInit {

  holidaysForm!: FormGroup;
   
  constructor(private formBuilder: FormBuilder) {
    this.holidaysForm = this.formBuilder.group({
      selectYear: new FormControl(''),
    });
   }

  ngOnInit(): void {
    // this.selectYearForm = new FormControl('', Validators.required);
  }

}

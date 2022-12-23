import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-pay-period',
  templateUrl: './pay-period.component.html',
  styleUrls: ['./pay-period.component.scss']
})
export class PayPeriodComponent implements OnInit {

  payPeriodForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) { 
     this.payPeriodForm = this.formBuilder.group({
      periodType: ['', Validators.required],
      startDate: ['', Validators.required],
      dateBeforeArchive: ['', Validators.required],
    });
  }

  ngOnInit(): void {
  }

}

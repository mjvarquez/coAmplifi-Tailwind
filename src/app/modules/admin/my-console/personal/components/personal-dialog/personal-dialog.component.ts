import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-personal-dialog',
  templateUrl: './personal-dialog.component.html',
  styleUrls: ['./personal-dialog.component.scss']
})
export class PersonalDialogComponent implements OnInit {
  personalActivities: FormGroup;

  constructor(
    private dialogRef: MatDialogRef<PersonalDialogComponent>,
    private formBuilder: FormBuilder
  ) { }

  submitForm() {
    this.personalActivities = this.formBuilder.group({
      groupName: ['', Validators.required],
      groupDescription: ['', Validators.required]
    });
  }

  closeDialog(): void {
    this.dialogRef.close()
  }

  ngOnInit(): void {
    this.submitForm();
  }

}

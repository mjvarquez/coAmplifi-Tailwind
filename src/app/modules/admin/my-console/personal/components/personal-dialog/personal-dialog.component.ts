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
  headerTitle: string = 'Add Group of Personal Activities';


  constructor(
    private dialogRef: MatDialogRef<PersonalDialogComponent>,
    private formBuilder: FormBuilder
  ) { }

  getPersonalActivitiesForm() {
    this.personalActivities = this.formBuilder.group({
      groupName: ['', Validators.required],
      groupDescription: ['', Validators.required]
    });
  }

  submitForm() {
    if (this.personalActivities.valid) {
      const data: Object = {
        groupName: this.personalActivities.value.groupName,
        groupDescription: this.personalActivities.value.groupDescription
      }
      console.log(data)
    }
  }

  closeDialog(): void {
    this.dialogRef.close()
  }

  ngOnInit(): void {
    this.getPersonalActivitiesForm();
  }

}

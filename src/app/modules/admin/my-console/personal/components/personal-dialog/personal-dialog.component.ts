import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-personal-dialog',
  templateUrl: './personal-dialog.component.html',
  styleUrls: ['./personal-dialog.component.scss']
})
export class PersonalDialogComponent implements OnInit {
  personalActivities: FormGroup;
  headerTitle: string = "Add Group of Personal Activities";
  actionBtn: string = "Add"

  constructor(
    @Inject(MAT_DIALOG_DATA) public editData: any,
    private dialogRef: MatDialogRef<PersonalDialogComponent>,
    private formBuilder: FormBuilder
  ) { }

  getPersonalActivitiesForm() {
    this.personalActivities = this.formBuilder.group({
      groupName: ['', Validators.required],
      groupDescription: ['', Validators.required]
    });
    if (this.editData) {
      this.personalActivities = this.formBuilder.group({
        groupDescription: ['', Validators.required]
      })
      this.headerTitle = "Update Group of Personal Activities";
      this.actionBtn = "Update"
      this.personalActivities.controls['groupDescription'].setValue(this.editData.groupDescription)
    }
  }

  submitForm() {
    if (!this.editData && this.personalActivities.valid) {
      const data = {
        groupName: this.personalActivities.value.groupName,
        groupDescription: this.personalActivities.value.groupDescription
      }
      this.addDataDialog(data)
    } else {
      this.updateForm();
    }
  }

  updateForm() {
    const data = {
      groupDescription: this.personalActivities.value.groupDescription
    };
    this.addDataDialog(data);
    console.log(data)
  }

  addDataDialog(data: Object): void {
    this.dialogRef.close({ event: 'Add', data: data })
  }

  // updateDataDialog(data: Object): void {
  //   this.dialogRef.close({ event: 'Update', data: data })
  // }

  closeDialog(): void {
    this.dialogRef.close({ event: 'Cancel' })
  }

  ngOnInit(): void {
    this.getPersonalActivitiesForm();
  }

}

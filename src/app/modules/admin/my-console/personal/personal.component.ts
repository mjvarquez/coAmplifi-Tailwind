import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { PersonalDialogComponent } from './components/personal-dialog/personal-dialog.component';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.scss']
})
export class PersonalComponent implements OnInit {

  constructor(
    private dialog: MatDialog,
    // private dialogRef: MatDialogRef<PersonalDialogComponent>,
  ) { }

  openDialog() {
    this.dialog.open(PersonalDialogComponent, {
      height: 'auto',
      width: 'auto',
      maxWidth: '80vw',
    })
  }

  // onNoClick(): void {
  //   this.dialogRef.close();
  // }

  ngOnInit(): void {
  }

}

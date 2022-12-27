import { Component, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PersonalDialogComponent } from './components/personal-dialog/personal-dialog.component';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.scss']
})
export class PersonalComponent implements OnInit {
  personalActivitiesDetails: Object[] = [];

  constructor(
    private dialog: MatDialog,
  ) { }

  openDialog() {
    let dialogRef = this.dialog.open(PersonalDialogComponent, {
      height: 'auto',
      width: 'auto',
      maxWidth: '80vw',
    })
    dialogRef.afterClosed().subscribe(res => {
      if (res.event === 'Add') {
        this.personalActivitiesDetails.push(res.data)
      } else if (res.event === 'Update') {
        // this.personalActivitiesDetails.push(res.data)
      }

    })
  }

  updateDialog(row: any) {
    let dialogRef = this.dialog.open(PersonalDialogComponent, {
      height: 'auto',
      width: 'auto',
      maxWidth: '80vw',
      data: row,
    })

  }

  // deleteDialog() {
  //   this.dialog.open(PersonalDialogComponent, {
  //     height: 'auto',
  //     width: 'auto',
  //     maxWidth: '80vw',
  //   })
  // }

  // onNoClick(): void {
  //   this.dialogRef.close();
  // }

  ngOnInit(): void {
  }

}

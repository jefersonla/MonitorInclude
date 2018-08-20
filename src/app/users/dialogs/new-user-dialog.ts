import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { User } from '../../../models/user.model';

@Component({
  selector: 'app-new-user-dialog',
  styleUrls: ['./new-user-dialog.scss'],
  templateUrl: './new-user-dialog.html'
})
export class NewUserDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<NewUserDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: User) {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}

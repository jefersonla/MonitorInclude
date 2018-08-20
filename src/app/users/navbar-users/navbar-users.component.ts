import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { NewUserDialogComponent } from '../dialogs/new-user-dialog';
import {User} from '../../../models/user.model';

@Component({
  selector: 'app-navbar-users',
  templateUrl: './navbar-users.component.html',
  styleUrls: ['./navbar-users.component.scss']
})
export class NavbarUsersComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  openDialog(): void {
    const dialogRef = this.dialog.open(NewUserDialogComponent, {
      width: '500px',
      data: new User()
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed => ', result);
      // this.animal = result;
    });
  }

  /*
  openEditorDialog(data: Object): void {
    const dialogRef = this.dialog.open(NewUserDialogComponent, {
      width: '500px',
      data: new User(data)
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed => ', result);
      // this.animal = result;
    });
  }
  */

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import {listStagger} from '../animations/basic.animations';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  animations: [
    listStagger
  ]
})
export class UsersComponent implements OnInit {

  users$: Array<User>;

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getUsers().subscribe(
      data => this.users$ = data
    );
  }

}

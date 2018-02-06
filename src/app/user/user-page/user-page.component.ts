import { Component, OnInit } from '@angular/core';
import {DialogsService} from '../../dialogs/dialogs.service';
import {UserService} from '../user.service';
@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent implements OnInit {
  public confirmResult: any;
  usersData;
  dataSource:null;
  displayedColumns = ['select', 'userId', 'userName', 'progress', 'color'];
  constructor(private userService:UserService,
    private dialogsService:DialogsService) { }

  ngOnInit() {
     this.userService.getUsersData().subscribe(
      (usersList:any) => {
        this.usersData = usersList;
      }
     );
  }

  openDialog () {
    this.dialogsService
    .confirm('Confirm Dialog2', 'Are you sure you want to do this?')
    .subscribe(res => this.confirmResult = res);
  }

}

import { Component, OnInit } from '@angular/core';
import {DialogsService} from '../../dialogs/dialogs.service';
import {UserService} from '../user.service';
import {SelectionModel} from '@angular/cdk/collections';
@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent implements OnInit {
  //public confirmResult: any;
  usersDataSource: UserData[];
  displayedColumns = ['select', 'id', 'fName', 'lName', 'desc', 'actions'];
  selection = new SelectionModel<UserData>(true, []);

  constructor(private userService:UserService,
    private dialogsService:DialogsService) { }

  ngOnInit() {
     this.userService.getUsersData().subscribe(
      (usersList:UserData[]) => {
        this.usersDataSource = usersList;
      }
     );
  }

 /* openDialog () {
    this.dialogsService
    .confirm('Confirm Dialog2', 'Are you sure you want to do this?')
    .subscribe(res => this.confirmResult = res);
  }*/

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numToTalRows = this.usersDataSource.length;
    return numSelected === numToTalRows;
  }

  masterToggle(){
    if(!this.usersDataSource){return;}
    this.isAllSelected() ? this.selection.clear() : 
    this.usersDataSource.forEach(row => this.selection.select(row))


  }

}

export interface UserData {
  id: string;
  lNname: string;
  fName: string;
  desc: string;
}


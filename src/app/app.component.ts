import { Component,AfterViewInit } from '@angular/core';
import {AppToolbarService, MenuItem} from './app-toolbar/app-toolbar.service';
import { Observable } from 'rxjs/Observable';
import { AppCommonModule} from './app-common/app-common.module';
import { ViewChild } from '@angular/core';
import {  MatSidenav   } from  '@angular/material';
import {DialogsService} from './dialogs/dialogs.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
}) 
export class AppComponent implements  AfterViewInit {
  @ViewChild('mainSideNav') sidenav: MatSidenav;
  //private sidenav: MatSidenav;

  public confirmResult: any;

  appName = 'My App';
  isDarkTheme = false;
  mainMenuItems;
  activeMenuItem$ : Observable<any>;
  constructor(private toolbarService:AppToolbarService,
              private dialogsService:DialogsService) {
    this.activeMenuItem$ = this.toolbarService.activeMenuItem$;
    this.toolbarService.getMenuItems().subscribe(
      (menuList: MenuItem[]) => {
        this.mainMenuItems = menuList;
      }
    ); 
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.sidenav.open();
    }, 250);
  }

  openDialog () {
    this.dialogsService
    .confirm('Confirm Dialog', 'Are you sure you want to do this?')
    .subscribe(res => this.confirmResult = res);
  }
}

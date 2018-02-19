import { Component } from '@angular/core';
import {AppToolbarService, MenuItem} from './app-toolbar/app-toolbar.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
}) 
export class AppComponent {
  appName = 'My App';
  isDarkTheme = false;
  mainMenuItems;
  activeMenuItem$: Observable<MenuItem[]>;
  constructor(private toolbarService:AppToolbarService) {
    this.toolbarService.getMenuItems().subscribe(
      (menuList: MenuItem[]) => {
        this.mainMenuItems = menuList;
      }
    );
   // this.activeMenuItem$ = this.toolbarService.activeMenuItem$;
  }
}

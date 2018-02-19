import { Component } from '@angular/core';
import {AppToolbarService} from './app-toolbar/app-toolbar.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  appName = 'Syam App';
  mainMenuItems;
  constructor(private toolbarService:AppToolbarService) {
    //this.mainMenuItems = this.toolbarService.
  }
}

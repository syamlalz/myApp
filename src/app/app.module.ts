import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppCommonModule} from './app-common/app-common.module'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { AppToolbarService } from './app-toolbar/app-toolbar.service';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppCommonModule,
    RouterModule.forRoot([
      {path:'', redirectTo:'/user', pathMatch: 'full'}
    ]) 
    
  ],
  providers: [AppToolbarService],
  bootstrap: [AppComponent]
})
export class AppModule { }

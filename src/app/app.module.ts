import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppCommonModule} from './app-common/app-common.module'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { AppToolbarService } from './app-toolbar/app-toolbar.service';
import { AppRoutingModule } from './app-routing.module';
import { UserModule } from './user/user.module'; 
import { RoleModule } from './role/role.module'; 
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    BrowserAnimationsModule,
    AppCommonModule,
    UserModule,
    RoleModule,
    AppRoutingModule 
    
  ],
  providers: [AppToolbarService],
  bootstrap: [AppComponent]
})
export class AppModule { }

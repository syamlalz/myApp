import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppCommonModule } from '../app-common/app-common.module';

import { UserRoutingModule } from './user-routing.module';
import { UserPageComponent } from './user-page/user-page.component';

@NgModule({
  imports: [ 
    CommonModule,
    AppCommonModule,
    UserRoutingModule
  ],
  declarations: [UserPageComponent],
  exports: []
})
export class UserModule { }

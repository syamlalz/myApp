import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppCommonModule } from '../app-common/app-common.module';

import { RoleRoutingModule } from './role-routing.module';
import { RolePageComponent } from './role-page/role-page.component';

@NgModule({
  imports: [
    CommonModule,
    RoleRoutingModule,
    AppCommonModule
  ],
  declarations: [RolePageComponent],
  exports: [RolePageComponent]
})
export class RoleModule { }

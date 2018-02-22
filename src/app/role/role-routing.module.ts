import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RolePageComponent } from './role-page/role-page.component';

const routes: Routes = [{
  path: 'roles',
  component: RolePageComponent,
  data:{
    title: 'Roles'
  }
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoleRoutingModule { }

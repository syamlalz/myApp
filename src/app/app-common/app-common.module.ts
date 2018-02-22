import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CdkTableModule} from '@angular/cdk/table';
import {
  MatSidenavModule,
  MatToolbarModule,
  MatListModule,
  MatIconModule,
  MatCardModule,
  MatMenuModule,
  MatButtonModule,
  MatTableModule,
  MatPaginatorModule,
  MatCheckboxModule,
} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DialogsModule } from '../dialogs/dialogs.module';
import {DataTableModule} from '../data-table/data-table.module';

@NgModule({
  imports: [
    CommonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule,
    MatCardModule,
    MatMenuModule,
    MatButtonModule,
    MatTableModule,
    MatPaginatorModule,
    MatCheckboxModule,
    FlexLayoutModule,
    DialogsModule,
    DataTableModule
  ],
  declarations: [],
  exports: [
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule,
    MatCardModule,
    MatMenuModule,
    MatButtonModule,
    MatTableModule,
    MatPaginatorModule,
    MatCheckboxModule,
    FlexLayoutModule,
    DialogsModule,
    DataTableModule,
    CdkTableModule
  ]
})
export class AppCommonModule { }

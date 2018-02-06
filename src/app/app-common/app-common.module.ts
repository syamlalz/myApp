import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
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
    FlexLayoutModule,
    DialogsModule,
    DataTableModule
  ]
})
export class AppCommonModule { }

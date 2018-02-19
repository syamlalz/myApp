import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef} from '@angular/material';
import { Observable } from 'rxjs/Observable'; 
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
@Injectable()
export class DialogsService {

  constructor(private dialog: MatDialog) { }

  public confirm(title:string, message:string):Observable<boolean>{

  }

}

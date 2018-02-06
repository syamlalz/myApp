import { Injectable } from '@angular/core';
import { Observable} from 'rxjs/Observable';
import { Http, Response } from '@angular/http';
@Injectable()
export class UserService {

  constructor(private http:Http) { }

  getUsersData():Observable<any>{
    return this.http.get('assets/users.json')
    .map(res => res.json().data)
  }

}

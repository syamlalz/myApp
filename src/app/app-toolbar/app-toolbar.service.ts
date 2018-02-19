import { Injectable } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Http, Response } from '@angular/http';
import { Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map'; 

@Injectable()
export class AppToolbarService {

  constructor( private http:Http) {
      
  }

  getMenuItems(): Observable<MenuItem[]>{
    return this.http.get('assets/menus.json')
      .map(res => res.json().data)  
    /*return this.router.config
    .filter(route => route.data && route.data.title)
    .map(route => {
        if (!route.data.title) {
            throw new Error('Missing title for toolbar menu route ' + route.path);
        }
        return {
            path: route.path,
            title: route.data.title,
            icon: route.data.icon
        };
    });*/
  }

}

export class MenuItem{
  path: string;
  title: string;
  icon?: string;
}

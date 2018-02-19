import { Injectable } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Injectable()
export class AppToolbarService {

  constructor(private router: Router) { }

  getMenuItems():MenuItem[]{
    return this.router.config
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
    });
  }

}

export class MenuItem{
  path: string;
  title: string;
  icon?: string;
}

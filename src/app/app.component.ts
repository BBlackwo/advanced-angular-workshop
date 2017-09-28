import { ActivatedRoute, Router, NavigationEnd } from '@angular/router/';
import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

import 'rxjs/add/operator/filter';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor (
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private title: Title
  ) {
    this.setTitle();
  }

  setTitle() {
    this.router.events.filter((e) => e instanceof NavigationEnd).subscribe((n: NavigationEnd) => {
      const routeDataTitle = this.router.routerState.snapshot.root.children[0].data.title;
      const dynamicTitle = this.router.routerState.snapshot.root.children[0].params.title;

      if (routeDataTitle) {
        return this.title.setTitle(routeDataTitle);
      }

      if (dynamicTitle) {
        return this.title.setTitle(dynamicTitle);
      }

      return this.title.setTitle('Site Default');
    });
  }
}

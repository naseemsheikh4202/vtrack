import { Component } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { filter, map, mergeMap } from 'rxjs/operators';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   constructor(
    private router: Router,
    private route: ActivatedRoute,
    private title: Title,
    private meta: Meta
  ) {
    this.setDynamicSEO();
  }


private setDynamicSEO(): void {
  this.router.events
    .pipe(
      filter((event): event is NavigationEnd => event instanceof NavigationEnd),
      map(() => this.route),
      map((route: ActivatedRoute): ActivatedRoute => {
        while (route.firstChild) {
          route = route.firstChild;
        }
        return route;
      }),
      filter((route: ActivatedRoute) => route.outlet === 'primary'),
      mergeMap((route: ActivatedRoute) => route.data)
    )
    .subscribe((data: any) => {
      if (data?.title) {
        this.title.setTitle(data.title);
        this.meta.updateTag({ name: 'description', content: data.description || '' });
        this.meta.updateTag({ name: 'keywords', content: data.keywords || '' });
        this.meta.updateTag({ property: 'og:title', content: data.title });
        this.meta.updateTag({ property: 'og:description', content: data.description });
        this.meta.updateTag({ property: 'og:image', content: data.image });
      }
    });
}


}

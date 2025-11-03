import { Injectable } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { SEO_CONFIG } from 'src/app/_config/seo.config';


@Injectable({
  providedIn: 'root'
})
export class SeoService {
  constructor(
    private title: Title,
    private meta: Meta,
    private router: Router
  ) {}

  initSEO(): void {
    this.router.events
      .pipe(filter((event: any) => event instanceof NavigationEnd))
      .subscribe((event: any) => {
        const route = event.urlAfterRedirects.split('?')[0]; // remove query params
        const seo = SEO_CONFIG[route];

        if (seo) {
          this.updateMeta(seo, route);
        }
      });
  }

  private updateMeta(seo: any, route: string): void {
    this.title.setTitle(seo.title);

    this.meta.updateTag({ name: 'description', content: seo.description });
    this.meta.updateTag({ name: 'keywords', content: seo.keywords });

    this.meta.updateTag({ property: 'og:title', content: seo.title });
    this.meta.updateTag({ property: 'og:description', content: seo.description });
    this.meta.updateTag({ property: 'og:image', content: seo.image });
    this.meta.updateTag({ property: 'og:url', content: `https://yourdomain.com${route}` });
  }
}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './_component/home/home.component';
import { AboutComponent } from './_component/about/about.component';
import { ServicesComponent } from './_component/services/services.component';
import { ContactComponent } from './_component/contact/contact.component';

// const routes: Routes = [
//  { path: 'home', component: HomeComponent },
//  { path: 'about', component: AboutComponent},
//  { path: 'services', component: ServicesComponent },
//  { path: 'contact', component: ContactComponent },
//  { path: '', redirectTo: '/home', pathMatch: 'full' },
//  { path: '**', redirectTo: '/home' }

// ];

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    data: {
      title: 'FieldTrack | Smart Field Management',
      description: 'Manage field operations efficiently using FieldTrack’s smart dashboard.',
      keywords: 'field management, tracking, analytics, productivity',
      image: 'https://vtrack.shop/assets/og-image.png'
    }
  },
  {
    path: 'about',
    component: AboutComponent,
    data: {
      title: 'About Us | FieldTrack',
      description: 'Learn more about FieldTrack and how we optimize field operations.',
      keywords: 'about, fieldtrack, company info, team',
      image: 'https://vtrack.shop/assets/about-og.png'
    }
  },
  {
    path: 'services',
    component: ServicesComponent,
    data: {
      title: 'Our Services | FieldTrack',
      description: 'Explore FieldTrack’s smart solutions for field management.',
      keywords: 'services, tracking, automation, field team',
      image: 'https://vtrack.shop/assets/services-og.png'
    }
  },
  {
    path: 'contact',
    component: ContactComponent,
    data: {
      title: 'Contact Us | FieldTrack',
      description: 'Get in touch with FieldTrack for support or partnership inquiries.',
      keywords: 'contact, fieldtrack, support, help',
      image: 'https://vtrack.shop/assets/contact-og.png'
    }
  },
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  // imports: [RouterModule.forRoot(routes, {initialNavigation: 'enabledBlocking'})],
  imports: [
    RouterModule.forRoot(routes, {
      initialNavigation: 'enabledBlocking', // ✅ Required for SSR
      scrollPositionRestoration: 'enabled',
      anchorScrolling: 'enabled'
    })
  ],
exports: [RouterModule]
})
export class AppRoutingModule { }

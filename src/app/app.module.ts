import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';;
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './_moduls/shared/shared.module';
import { HomeComponent } from './_component/home/home.component';
import { ServicesComponent } from './_component/services/services.component';
import { AboutComponent } from './_component/about/about.component';
import { ContactComponent } from './_component/contact/contact.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ServicesComponent,
    ContactComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

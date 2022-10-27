import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProfileComponent } from './profile/profile.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ViewComponent } from './view/view.component';
import { DetailsComponent } from './details/details.component';
import { HashLocationStrategy, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent,
    NavbarComponent,
    ProfileComponent,
    PageNotFoundComponent,
    ViewComponent,
    DetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    {provide: LocationStrategy,useClass:PathLocationStrategy}
    // {provide: LocationStrategy,useClass:HashLocationStrategy} 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

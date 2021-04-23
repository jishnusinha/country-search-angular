import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Routing
import { RouterModule, Routes } from "@angular/router";
import { CountriesHttpService } from './countries-http.service';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AllCountriesComponent } from './all-countries/all-countries.component';
import { CountryViewComponent } from './country-view/country-view.component';

import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AllCountriesComponent,
    CountryViewComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    Ng4LoadingSpinnerModule.forRoot(),
    AngularFontAwesomeModule,
    RouterModule.forRoot([
      { path: "home", component: HomeComponent },
      { path: "", redirectTo: "home", pathMatch: "full" },
      { path: "all-countries/:region", component: AllCountriesComponent },
      { path: "all-countries/:code", component: AllCountriesComponent },
      { path: "country-view/:name", component: CountryViewComponent },
      { path: "**", component: HomeComponent },
    ])
  ],
  providers: [CountriesHttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }

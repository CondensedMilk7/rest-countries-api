import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CountriesComponent } from './countries/countries.component';
import { CountryComponent } from './countries/country/country.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [AppComponent, CountriesComponent, CountryComponent],
  imports: [BrowserModule, HttpClientModule, FontAwesomeModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CountriesComponent } from './countries/countries.component';
import { CountryCardComponent } from './countries/country-card/country-card.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SpinnerComponent } from './spinner/spinner.component';
import { ErrorComponent } from './error/error.component';
import { CountryDetailsComponent } from './countries/country-details/country-details.component';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: ':country', component: CountryDetailsComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    CountriesComponent,
    CountryCardComponent,
    SpinnerComponent,
    ErrorComponent,
    CountryDetailsComponent,
    MainComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FontAwesomeModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

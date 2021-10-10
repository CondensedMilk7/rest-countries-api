import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CountriesComponent } from './main/countries/countries.component';
import { CountryCardComponent } from './main/countries/country-card/country-card.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SpinnerComponent } from './spinner/spinner.component';
import { ErrorComponent } from './error/error.component';
import { CountryDetailsComponent } from './main/countries/country-details/country-details.component';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  // {
  //   path: 'countries',
  //   component: MainComponent,
  //   children: [{ path: ':continent', component: MainComponent }],
  // },
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

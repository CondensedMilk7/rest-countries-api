import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { CountriesService } from '../countries.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-country-details',
  templateUrl: './country-details.component.html',
  styleUrls: ['./country-details.component.scss'],
})
export class CountryDetailsComponent implements OnInit, OnDestroy {
  countryName = '';
  country: any = {};
  bordersCodes = [];
  borderCountries: any = [];
  paramsSub = new Subscription();

  constructor(
    private route: ActivatedRoute,
    private countriesService: CountriesService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.countryName = params.country;
    });

    this.countriesService
      .getByField(this.countryName, [
        'name',
        'nativeName',
        'flag',
        'population',
        'region',
        'subregion',
        'capital',
        'topLevelDomain',
        'currencies',
        'languages',
        'borders',
      ])
      .subscribe((data) => {
        // Why are you making me do this TypeScript?
        this.country = data;
        this.country = this.country[0];
        if (this.country.borders.length > 0) {
          this.bordersCodes = this.country.borders;
          this.getBorderCountries(this.bordersCodes);
        }
        // this.borderCountries = this.getBorderCountries(this.bordersCodes);
      });
  }

  // What abomination is this
  // Stores JUST the names of current country's border countries in borderCountries array
  getBorderCountries(borders: string[]) {
    this.countriesService.getByCode(borders).subscribe((data) => {
      this.borderCountries = data;
      const borderNames = [];
      for (let country of this.borderCountries) {
        borderNames.push(country.name);
      }
      this.borderCountries = borderNames;
    });
  }

  ngOnDestroy() {
    this.paramsSub.unsubscribe();
  }
}

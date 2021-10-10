import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CountriesService } from '../main/countries/countries.service';
import { faArrowAltCircleLeft } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-country-details',
  templateUrl: './country-details.component.html',
  styleUrls: ['./country-details.component.scss'],
})
export class CountryDetailsComponent implements OnInit, OnDestroy {
  faArrowAltCircleLeft = faArrowAltCircleLeft;

  isLoading = true;

  countryName = '';
  country: any = {};
  bordersCodes = [];
  borderCountries: any = [];
  paramsSub = new Subscription();

  constructor(
    private route: ActivatedRoute,
    private countriesService: CountriesService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.isLoading = true;
      this.countriesService
        .getByField(params.country, [
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
          this.isLoading = false;
        });
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

  onNavigate(country: string) {
    this.router.navigate(['/' + country]);
  }

  ngOnDestroy() {
    this.paramsSub.unsubscribe();
  }
}

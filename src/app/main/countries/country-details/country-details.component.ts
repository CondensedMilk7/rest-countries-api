import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ColorPalette, ThemeService } from 'src/app/theme.service';
import { CountriesService } from '../countries.service';

@Component({
  selector: 'app-country-details',
  templateUrl: './country-details.component.html',
  styleUrls: ['./country-details.component.scss'],
})
export class CountryDetailsComponent implements OnInit, OnDestroy {
  isLoading = true;

  colors: ColorPalette = this.themeService.lightModeColors;
  isDark = false;
  themeSub = new Subscription();

  error = false;

  countryName = '';
  country: any = {};
  bordersCodes = [];
  borderCountries: any = [];
  paramsSub = new Subscription();

  constructor(
    private route: ActivatedRoute,
    private countriesService: CountriesService,
    private router: Router,
    private themeService: ThemeService
  ) {}

  ngOnInit(): void {
    // Theme
    this.isDark = this.themeService.darkModeOn; // needed for icon color change
    this.colors = this.themeService.getColors();
    this.themeSub = this.themeService.isDark.subscribe((colors) => {
      this.colors = colors;
      this.isDark = this.themeService.darkModeOn;
    });

    //get data from API
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
        .subscribe(
          (data) => {
            // Why are you making me do this TypeScript?
            this.country = data;
            this.country = this.country[0];
            if (this.country.borders.length > 0) {
              this.bordersCodes = this.country.borders;
              this.getBorderCountries(this.bordersCodes);
            }
            this.isLoading = false;
          },
          (error) => {
            this.error = true;
            console.log(error);
          }
        );
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
    this.themeSub.unsubscribe();
  }
}

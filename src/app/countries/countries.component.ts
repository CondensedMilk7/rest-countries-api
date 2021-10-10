import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { __classPrivateFieldGet } from 'tslib';
import { CountriesService } from './countries.service';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.scss'],
})
export class CountriesComponent implements OnInit, OnDestroy {
  countries: any = [];

  isLoading = true;
  isError = false;

  filterSub = new Subscription();

  constructor(private countriesService: CountriesService) {}

  ngOnInit() {
    this.countriesService
      .getByField('all', ['name', 'flag', 'population', 'region', 'capital'])
      .subscribe(
        (countries) => {
          this.countries = countries;
          this.isLoading = false;
          // If error was previously shown, this will make it disappear
          this.isError = false;
        },
        (error) => {
          this.showError(error);
        }
      );

    // Reacts to filter by region
    this.filterSub = this.countriesService.filter.subscribe((filter) => {
      this.isLoading = true;
      this.countries = [];
      this.countriesService.getByContinent(filter).subscribe(
        (countries) => {
          this.isLoading = false;
          this.countries = countries;
          this.isError = false;
        },
        (error) => {
          this.showError(error);
        }
      );
    });
  }

  showError(error: Error) {
    this.isLoading = false;
    this.isError = true;
    console.log(error);
  }

  ngOnDestroy() {
    this.filterSub.unsubscribe();
  }
}

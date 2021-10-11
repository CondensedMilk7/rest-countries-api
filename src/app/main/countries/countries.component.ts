import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { __classPrivateFieldGet } from 'tslib';
import { CountriesService } from './countries.service';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.scss'],
})
export class CountriesComponent implements OnInit, OnDestroy {
  @Input() searchText: string;
  @Input() selectedRegion: string;

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
          console.log(countries);
        },
        (error) => {
          this.showError(error);
        }
      );
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

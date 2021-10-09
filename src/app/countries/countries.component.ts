import { Component, OnInit } from '@angular/core';
import { CountriesService } from './countries.service';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.scss'],
})
export class CountriesComponent implements OnInit {
  countries: any = [];

  constructor(private countriesService: CountriesService) {}

  ngOnInit() {
    this.countriesService
      .getByField('all', ['name', 'flag', 'population', 'region', 'capital'])
      .subscribe((countries) => {
        this.countries = countries;
      });
  }
}

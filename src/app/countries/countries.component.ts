import { Component, OnInit } from '@angular/core';
import { CountriesService } from './countries.service';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.scss'],
})
export class CountriesComponent implements OnInit {
  countries = {};

  constructor(private countriesService: CountriesService) {}

  ngOnInit() {
    this.countriesService.getAllCountries().subscribe((countries) => {
      this.countries = countries;
      console.log(countries);
    });
  }
}

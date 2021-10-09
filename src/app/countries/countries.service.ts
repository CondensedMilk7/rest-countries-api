import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class CountriesService {
  constructor(private http: HttpClient) {}

  getAllCountries() {
    return this.http.get('https://restcountries.com/v2/all');
  }
}

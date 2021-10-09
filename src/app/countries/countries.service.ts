import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class CountriesService {
  constructor(private http: HttpClient) {}

  getAllCountries() {
    return this.http.get('https://restcountries.com/v2/all');
  }

  // getCountry(name: string) {
  //   return this.http.get('https://restcountries.com/v2/name/' + name);
  // }

  getByContinent(continent: string) {
    return this.http.get('https://restcountries.com/v2/continent/' + continent);
  }

  getByField(country: string, fields: string[]) {
    let query = '';
    let fieldsJoined = '';

    // Adds up to create query
    for (let field of fields) {
      fieldsJoined += field + ',';
    }

    if (country != 'all') {
      query = `https://restcountries.com/v2/name/${country}?fields=${fieldsJoined}`;
    } else {
      query = 'https://restcountries.com/v2/all?fields=' + fieldsJoined;
    }

    return this.http.get(query);
  }
}

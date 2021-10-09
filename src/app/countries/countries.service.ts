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

  getCountry(country: string, fields?: string[]) {
    let query = '';
    if (fields && country != 'all') {
      let fieldsJoined = '';
      // Adds up to create query
      for (let field of fields) {
        fieldsJoined += field + ',';
      }
      query = `https://restcountries.com/v2/name/${country}?fields=${fieldsJoined}`;
    }
    if (!fields && country != 'all') {
      query = `https://restcountries.com/v2/name/${country}`;
    }
    if (country === 'all') {
      query = 'https://restcountries.com/v2/all/?fields=' + fields;
    }
    return this.http.get(query);
  }
}

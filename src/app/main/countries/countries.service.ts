import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class CountriesService {

  constructor(private http: HttpClient) {}

  getAllCountries() {
    return this.http.get('https://restcountries.com/v2/all');
  }

  getByName(name: string) {
    return this.http.get('https://restcountries.com/v2/name/' + name);
  }

  // getCountry(name: string) {
  //   return this.http.get('https://restcountries.com/v2/name/' + name);
  // }

  getByContinent(continent: string) {
    return this.http.get(
      'https://restcountries.com/v2/continent/' + continent.toLowerCase()
    );
  }

  getByField(country: string, fields: string[]) {
    let query = '';
    let fieldsJoined = this.joinFields(fields);

    if (country != 'all') {
      query = `https://restcountries.com/v2/name/${country}?fields=${fieldsJoined}`;
    } else {
      query = 'https://restcountries.com/v2/all?fields=' + fieldsJoined;
    }

    return this.http.get(query);
  }

  getByCode(codes: string[]) {
    return this.http.get(
      'https://restcountries.com/v2/alpha?codes=' + this.joinFields(codes)
    );
  }

  // Adds up query fields into a single string - "arg1,arg2,arg3,"
  private joinFields(fields: string[]) {
    let fieldsJoined = '';
    for (let field of fields) {
      fieldsJoined += field + ',';
    }
    return fieldsJoined;
  }
}

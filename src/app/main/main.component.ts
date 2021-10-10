import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { faMoon, faCaretSquareDown } from '@fortawesome/free-regular-svg-icons';
import { CountriesService } from './countries/countries.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  title = 'rest-countries-api';
  faMoon = faMoon;
  faCaretSquareDown = faCaretSquareDown;

  isLoading = true;

  dropDown = false;
  currentFilter: string = '';
  filterOptions = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];

  constructor(
    private countriesService: CountriesService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {}

  toggleDropDown() {
    this.dropDown = !this.dropDown;
  }

  onFilter(option: string) {
    this.toggleDropDown();
    this.currentFilter = option;
    this.countriesService.filter.next(option);

    // failed attempt to implement routing, cannot access route params from countries.component.ts
    // this.router.navigate(['/countries/' + option]);
  }
}

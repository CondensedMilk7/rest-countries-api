import { Component } from '@angular/core';
import { faMoon, faCaretSquareDown } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'rest-countries-api';
  faMoon = faMoon;
  faCaretSquareDown = faCaretSquareDown;

  dropDown = false;
  currentFilter: string = '';
  filterOptions = ['Africa', 'America', 'Asia', 'Europe', 'Oceania'];

  constructor() {}

  toggleDropDown() {
    this.dropDown = !this.dropDown;
  }

  onFilter(option: string) {
    this.toggleDropDown();
    this.currentFilter = option;
  }
}

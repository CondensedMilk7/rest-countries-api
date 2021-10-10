import { Component, OnInit } from '@angular/core';
import { faMoon, faCaretSquareDown } from '@fortawesome/free-regular-svg-icons';

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
  filterOptions = ['Africa', 'America', 'Asia', 'Europe', 'Oceania'];

  constructor() {}

  ngOnInit(): void {}

  toggleDropDown() {
    this.dropDown = !this.dropDown;
  }

  onFilter(option: string) {
    this.toggleDropDown();
    this.currentFilter = option;
  }
}

import { Component } from '@angular/core';
import { faMoon } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'rest-countries-api';

  faMoon = faMoon;

  constructor() {}
}

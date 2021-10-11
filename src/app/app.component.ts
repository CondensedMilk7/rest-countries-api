import { Component, OnInit } from '@angular/core';
import { ColorPalette, ThemeService } from './theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'rest-countries-api';

  darkMode = false;

  colors: ColorPalette = this.themeService.getColors();

  constructor(private themeService: ThemeService) {}

  ngOnInit() {}

  toggleDarkMode() {
    this.themeService.toggleDarkTheme();
    this.darkMode = this.themeService.darkModeOn;
    if (this.themeService.darkModeOn) {
      this.colors = this.themeService.darkModeColors;
    } else {
      this.colors = this.themeService.lightModeColors;
    }
  }
}

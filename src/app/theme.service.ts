import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

export interface ColorPalette {
  elements: string;
  background: string;
  text: string;
}

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  isDark = new Subject<ColorPalette>();

  public darkModeOn = false;

  public darkModeColors: ColorPalette = {
    elements: 'hsl(209, 23%, 22%)',
    background: 'hsl(207, 26%, 17%)',
    text: 'hsl(0, 0%, 100%)',
  };

  public lightModeColors: ColorPalette = {
    elements: '',
    background: '',
    text: '',
  };

  constructor() {}

  toggleDarkTheme() {
    this.darkModeOn = !this.darkModeOn;
    this.darkModeOn
      ? this.isDark.next(this.darkModeColors)
      : this.isDark.next(this.lightModeColors);
  }
}

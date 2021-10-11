import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ColorPalette, ThemeService } from '../theme.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit, OnDestroy {
  darkModeSub = new Subscription();

  colors: ColorPalette = this.themeService.darkModeColors;

  searchText = '';

  isLoading = true;

  dropDown = false;
  selectedRegion: string = '';
  filterOptions = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];

  constructor(private themeService: ThemeService) {}

  ngOnInit() {
    this.darkModeSub = this.themeService.isDark.subscribe((colors) => {
      this.colors = colors;
    });
  }

  toggleDropDown() {
    this.dropDown = !this.dropDown;
  }

  onFilter(option: string) {
    this.toggleDropDown();
    this.selectedRegion = option; // sends selected region to child component

    // failed attempt to implement routing, cannot access route params from countries.component.ts
    // this.router.navigate(['/countries/' + option]);
  }

  ngOnDestroy() {
    this.darkModeSub.unsubscribe();
  }
}

import { Component, Input, OnInit } from '@angular/core';
import { ColorPalette } from 'src/app/theme.service';

@Component({
  selector: 'app-country',
  templateUrl: './country-card.component.html',
  styleUrls: ['./country-card.component.scss'],
})
export class CountryCardComponent implements OnInit {
  @Input() country: any;
  @Input() colors: ColorPalette;
  constructor() {}

  ngOnInit(): void {
  }
}

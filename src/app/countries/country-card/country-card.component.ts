import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-country',
  templateUrl: './country-card.component.html',
  styleUrls: ['./country-card.component.scss'],
})
export class CountryCardComponent implements OnInit {
  @Input() country: any;
  constructor() {}

  ngOnInit(): void {}
}

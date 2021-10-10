import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error',
  template:
    '<div class="error-block"><h3>Error: something went wrong!</h3></div>',
  styleUrls: ['./error.component.scss'],
})
export class ErrorComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}

import { Component, Inject } from '@angular/core';

@Component({
  selector: 'ecp-primary-navbar',
  templateUrl: './primary-navbar.component.html',
  styleUrls: ['./primary-navbar.component.scss'],
})
export class PrimaryNavbarComponent {
  constructor(
    @Inject('ENV') public env: { [key: string]: string }
  ) { }
}

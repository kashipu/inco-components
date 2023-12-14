import { Component } from '@angular/core';
import { UserButtonComponent } from '../user-button/user-button.component';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [UserButtonComponent, NavbarComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  logoUrl = "/assets/images/logo-incocredito.svg"
}

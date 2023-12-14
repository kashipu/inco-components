import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user-button',
  standalone: true,
  imports: [],
  templateUrl: './user-button.component.html',
  styleUrl: './user-button.component.scss'
})
export class UserButtonComponent {
  @Input() userName:string = 'Nombre de usuario';
  @Input() userRole:string = 'Rol del usuario';
}

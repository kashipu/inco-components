import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sidebar-button',
  standalone: true,
  imports: [],
  templateUrl: './sidebar-button.component.html',
  styleUrl: './sidebar-button.component.scss'
})
export class SidebarButtonComponent {
  @Input() buttonLink:string = '#';
}

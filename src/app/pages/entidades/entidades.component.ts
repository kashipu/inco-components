import { Component } from '@angular/core';
import { BreadcrumbComponent } from '../../components/breadcrumb/breadcrumb.component';
import { SidebarButtonComponent } from '../../components/sidebar-button/sidebar-button.component';
import { IconComponent } from '../../components/icon/icon.component';
import { ButtonComponent } from '../../components/button/button.component';
@Component({
  selector: 'app-entidades',
  standalone: true,
  imports: [BreadcrumbComponent, SidebarButtonComponent, IconComponent, ButtonComponent],
  templateUrl: './entidades.component.html',
  styleUrl: './entidades.component.scss'
})
export class EntidadesComponent {
  celdas = [10];
}

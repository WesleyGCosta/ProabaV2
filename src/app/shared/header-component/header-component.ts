import { Component, output } from '@angular/core';

@Component({
  selector: 'app-header-component',
  imports: [],
  templateUrl: './header-component.html',
  styleUrl: './header-component.scss',
})
export class HeaderComponent {
  public toggleSidebar = output<void>();

  onHamburgerClick() {
    this.toggleSidebar.emit();
  }
}

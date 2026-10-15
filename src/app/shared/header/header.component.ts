import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  constructor(private router: Router) {}

  openMenu: boolean = false;

  toggleMenu() {
    this.openMenu = !this.openMenu;
  }

  redirectToHome() {
    this.router.navigate(['/home']);
  }

  redirectToClassroom() {
    this.router.navigate(['/classroom']);
  }

  redirectToAbout() {
    this.router.navigate(['/about']);
  }
}

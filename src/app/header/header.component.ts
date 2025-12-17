import { Component, ElementRef, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  menuOpen = false;
  solutionsOpen = false;

  constructor(private host: ElementRef<HTMLElement>) {}

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }

  toggleSolutions(event: Event): void {
    event.preventDefault();
    event.stopPropagation();
    this.solutionsOpen = !this.solutionsOpen;
  }

  closeMenus(): void {
    this.menuOpen = false;
    this.solutionsOpen = false;
  }

  onNavClick(): void {
    this.closeMenus();
  }

  @HostListener('document:click', ['$event'])
  @HostListener('document:touchstart', ['$event'])
  handleOutside(event: Event): void {
    const target = event.target as HTMLElement | null;
    if (!target) return;
    const inside = this.host.nativeElement.contains(target);
    if (!inside) {
      this.closeMenus();
    }
  }

  @HostListener('window:keydown.escape')
  handleEscape(): void {
    this.closeMenus();
  }
}


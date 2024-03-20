import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-known-technologies',
  templateUrl: './known-technologies.component.html',
  styleUrls: ['./known-technologies.component.scss']
})
export class KnownTechnologiesComponent {
  isTop = true;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const threshold = 50;
    this.isTop = window.scrollY < threshold;
  }
}

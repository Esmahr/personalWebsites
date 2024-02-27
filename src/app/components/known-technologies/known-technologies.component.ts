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
    // Sayfanın en üstünde olup olmadığını kontrol edin (örneğin, 100px'den az scroll yapıldıysa)
    const threshold = 50;
    this.isTop = window.scrollY < threshold;
  }
}

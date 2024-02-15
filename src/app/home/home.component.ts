import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  isTop = true;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    // Sayfanın en üstünde olup olmadığını kontrol edin (örneğin, 100px'den az scroll yapıldıysa)
    const threshold = 50;
    this.isTop = window.scrollY < threshold;
  }
}

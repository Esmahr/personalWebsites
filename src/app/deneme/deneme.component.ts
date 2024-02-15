import { Component, HostListener } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";

@Component({
    selector: 'app-deneme',
    templateUrl: './deneme.component.html',
    styleUrls: ['./deneme.component.scss']
})
export class DenemeComponent {
  isTop = true;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    // Sayfanın en üstünde olup olmadığını kontrol edin (örneğin, 100px'den az scroll yapıldıysa)
    const threshold = 50;
    this.isTop = window.scrollY < threshold;
  }
}

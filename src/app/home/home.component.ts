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
    const threshold = 50;
    this.isTop = window.scrollY < threshold;
  }

}

import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-blog-summary-item',
  templateUrl: './blog-summary-item.component.html',
  styleUrls: ['./blog-summary-item.component.scss']
})
export class BlogSummaryItemComponent {
  liked = false;
  @ViewChild('heartsContainer', { static: true })
  heartsContainer!: ElementRef;

  constructor(private renderer: Renderer2) { }

  heartit(event: any): void {
    this.liked = !this.liked;

    const svg1 = this.createHeartSvg('heart-pop one');
    const svg2 = this.createHeartSvg('heart-pop two');
     const svg3 = this.createHeartSvg('heart-pop three');
    const svg4 = this.createHeartSvg('heart-pop four');

    // SVG'leri heartsContainer'a ekle
    this.renderer.appendChild(this.heartsContainer.nativeElement, svg1);
    this.renderer.appendChild(this.heartsContainer.nativeElement, svg2);
    this.renderer.appendChild(this.heartsContainer.nativeElement, svg3);
    this.renderer.appendChild(this.heartsContainer.nativeElement, svg4);

    // Belirli bir süre sonra SVG'leri kaldır
    setTimeout(() => {
      this.renderer.removeChild(this.heartsContainer.nativeElement, svg1);
      this.renderer.removeChild(this.heartsContainer.nativeElement, svg2);
      this.renderer.removeChild(this.heartsContainer.nativeElement, svg3);
      this.renderer.removeChild(this.heartsContainer.nativeElement, svg4);
    }, 3000);
  }

  // Kalp SVG'si oluşturmak için yardımcı metod
  private createHeartSvg(className: string): SVGElement {
    const svg = this.renderer.createElement('svg', 'svg');
    this.renderer.setAttribute(svg, 'class', `heart ${className}`);
    this.renderer.setAttribute(svg, 'viewBox', '0 0 32 29.6');
    const path = this.renderer.createElement('path', 'svg');
    this.renderer.setAttribute(path, 'd', 'M23.6,0c-3.4,0-6.3,2.7-7.6,5.6C14.7,2.7,11.8,0,8.4,0C3.8,0,0,3.8,0,8.4c0,9.4,9.5,11.9,16,21.2c6.1-9.3,16-12.1,16-21.2C32,3.8,28.2,0,23.6,0z');
    this.renderer.appendChild(svg, path);
    return svg;
  }
}
import { Component } from '@angular/core';

@Component({
  selector: 'app-blog-summary',
  templateUrl: './blog-summary.component.html',
  styleUrls: ['./blog-summary.component.scss']
})
export class BlogSummaryComponent {
  sentences = [
    "Hayat, yaşamaya değer kılınacak bir serüvendir.",
    "Bilgi ağaçtır, sabır ise su.",
    "Her yeni gün, yeni bir başlangıçtır."
  ];
  

  current = 0;

  constructor() {
    setInterval(() => {
      this.current = (this.current + 1) % this.sentences.length;
    }, 2000);
  }

  getStyle(index: number) {
    let style = {};
    const position = (index - this.current + this.sentences.length) % this.sentences.length;
    if (position === 0) {
      style = { transform: 'translateY(0)', opacity: 1, fontSize: '20px' };
    } else if (position === 1 || position === this.sentences.length - 1) {
      style = { transform: 'translateY(-100%)', opacity: 0.5, fontSize: '18px' };
    } else {
      style = { opacity: 0 };
    }
    return style;
  }

}

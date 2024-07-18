import { Component } from '@angular/core';

@Component({
  selector: 'app-blog-summary',
  template:  `<h1>Blog Yazılarım</h1>
  <div class="blog-summary d-flex justify-content-between m-5 mb-3 pe-5 ps-5">
      <div id="carouselExampleCaptions" class="carousel slide">
          <div class="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active"
                  aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"
                  aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"
                  aria-label="Slide 3"></button>
          </div>
          <div class="carousel-inner">
              <div class="carousel-item active">
                  <img src="../../../assets/ft1.png" class="d-block w-100" alt="...">
                  <div class="carousel-caption d-none d-md-block">
                      <h5>First slide label</h5>
                      <p>Some representative placeholder content for the first slide.</p>
                  </div>
              </div>
              <div class="carousel-item">
                  <img src="../../../assets/ft1.png" class="d-block w-100" alt="...">
                  <div class="carousel-caption d-none d-md-block">
                      <h5>Second slide label</h5>
                      <p>Some representative placeholder content for the second slide.</p>
                  </div>
              </div>
              <div class="carousel-item">
                  <img src="../../../assets/ft1.png" class="d-block w-100" alt="...">
                  <div class="carousel-caption d-none d-md-block">
                      <h5>Third slide label</h5>
                      <p>Some representative placeholder content for the third slide.</p>
                  </div>
              </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions"
              data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions"
              data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
          </button>
      </div>
      <div class="last-blog">
          <ul>
              <app-blog-summary-item></app-blog-summary-item>
              <app-blog-summary-item></app-blog-summary-item>
              <app-blog-summary-item></app-blog-summary-item>
          </ul>
      </div>
  </div>
  <p class="mb-5">Daha fazla makale için <a href="">tıklayınız</a></p> `,
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

import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-blog-summary-item',
  template: `<li class="last-blog mb-5 d-flex" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
  <div class="card-img"><img src="../../../../assets/ft1.png" alt=""></div>
  <div class="card-content p-2">
      <h4 class="mt-2">Randevu Yönetim Sistemi Nedir?</h4>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo architecto harum fugiat voluptatum dicta
          temporibus ipsam beatae nulla odit numquam, ex mollitia minus esse iure in! Dolorem veritatis aut enim? 
          temporibus ipsam beatae nulla odit numquam, ex mollitia minus esse iure in! Dolorem veritatis aut enim?</p>
  </div>
</li>

<!-- Modal -->
<div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
  aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog d-grid justify-content-center">
      <div class="modal-content">
          <div class="modal-header">
              <h1 class="modal-title fs-5" id="staticBackdropLabel">Modal title</h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body p-5 text-start">
              <div class="img mb-4"><img src="../../../../assets/ft1.png" alt=""></div>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id itaque est, enim deserunt veniam
                  sapiente.</p>
              <p>Eligendi unde quam, quidem dolores placeat laudantium ipsam! Expedita itaque unde error laborum,
                  veritatis aliquid.
                  Dolor error nostrum veritatis quas sit autem possimus officiis placeat. Nulla, sapiente? Fuga
                  reiciendis
                  expedita nam perspiciatis voluptatibus minus magnam fugit autem, numquam quos beatae voluptate
                  nostrum
                  labore odit id.</p>
              <p>Vitae, fuga officiis repellat assumenda minus ab ex expedita a quibusdam illum omnis dolor vero id
                  error
                  perferendis delectus? Esse, fuga? Cum animi eius nisi delectus saepe ipsa ratione doloribus.
                  Quas Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id itaque est, enim deserunt veniam
                  sapiente. Eligendi unde quam, quidem dolores placeat laudantium ipsam! Expedita itaque unde error
                  laborum, veritatis aliquid.
                  Dolor error nostrum veritatis quas sit autem possimus officiis placeat. Nulla, sapiente? Fuga
                  reiciendis
                  expedita nam perspiciatis voluptatibus minus magnam fugit autem, numquam quos beatae voluptate
                  nostrum
                  labore odit id.</p>
              <p class="d-flex"><img class="me-3" width="200" src="../../../../assets/profil.jpg" alt=""> Vitae, fuga
                  officiis repellat assumenda minus ab ex expedita a quibusdam illum omnis dolor vero id error
                  perferendis delectus? Esse, fuga? Cum animi eius nisi delectus saepe ipsa ratione doloribus.
                  Quas Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id itaque est, enim deserunt veniam
                  sapiente. Eligendi unde quam, quidem dolores placeat laudantium ipsam! Expedita itaque unde error
                  laborum, veritatis aliquid.</p>
              <ul class="list-unstyled">
                  <li>Nested lists:
                      <ul>
                          <li>are unaffected by this style</li>
                          <li>will still show a bullet</li>
                          <li>and have appropriate left margin</li>
                      </ul>
                  </li>
                  <li>This may still come in handy in some situations.</li>
              </ul>
              <p>Dolor error nostrum veritatis quas sit autem possimus officiis placeat. Nulla, sapiente? Fuga
                  reiciendis
                  expedita nam perspiciatis voluptatibus minus magnam fugit autem, numquam quos beatae voluptate
                  nostrum
                  labore odit id.
                  Vitae, fuga officiis repellat assumenda minus ab ex expedita a quibusdam illum omnis dolor vero id
                  error
                  perferendis delectus? Esse, fuga? Cum animi eius nisi delectus saepe ipsa ratione doloribus.
                  Quas Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id itaque est, enim deserunt veniam
                  sapiente. Eligendi unde quam</p>
              <p> , quidem dolores placeat laudantium ipsam! Expedita itaque unde
                  error
                  laborum, veritatis aliquid.
                  Dolor error nostrum veritatis quas sit autem possimus officiis placeat. Nulla, sapiente? Fuga
                  reiciendis
                  expedita nam perspiciatis voluptatibus minus magnam fugit autem, numquam quos beatae voluptate
                  nostrum
                  labore odit id.</p>
              <p> Vitae, fuga officiis repellat assumenda minus ab ex expedita a quibusdam illum omnis dolor vero id
                  error
                  perferendis delectus? Esse, fuga? Cum animi eius nisi delectus saepe ipsa ratione doloribus.
                  Quas Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id itaque est, enim deserunt veniam
                  sapiente. Eligendi unde quam, quidem dolores placeat laudantium ipsam! Expedita itaque unde error
                  laborum, veritatis aliquid.
                  Dolor error nostrum veritatis quas sit autem possimus officiis placeat. Nulla, sapiente? Fuga
                  reiciendis
                  expedita nam perspiciatis voluptatibus minus magnam fugit autem, numquam quos beatae voluptate
                  nostrum
                  labore odit id.</p>
              <p>Vitae, fuga officiis repellat assumenda minus ab ex expedita a quibusdam illum omnis dolor vero id
                  error
                  perferendis delectus? Esse, fuga? Cum animi eius nisi delectus saepe ipsa ratione doloribus.
                  Quaseum placeat sed cupiditate eius dolor praesentium quibusdam autem accusantium ipsam. Minima, eos
                  quidem unde eligendi fugiat, molestias in, quasi facilis nihil nobis ut nesciunt expedita beatae
                  sed.
                  Aut.
                  Nisi ea odio adipisci sint dignissimos recusandae quam asperiores quasi modi nostrum repudiandae
                  rerum,
                  eos dolore placeat, error at, tenetur cumque corrupti! Error atque provident repellendus, enim
                  dolorum
                  optio eum.</p>
          </div>
          <div class="modal-footer p-1">
              <button [ngClass]="{'heart-btn me-3': true, 'liked': liked}" (click)="heartit($event)">
                  <svg class="heart heart-icon" viewBox="0 0 32 29.6">
                      <path d="M23.6,0c-3.4,0-6.3,2.7-7.6,5.6C14.7,2.7,
                      11.8,0,8.4,0C3.8,0,0,3.8,0,8.4c0,9.4,9.5,11.9,16,
                      21.2 c6.1-9.3,16-12.1,16-21.2C32,3.8,28.2,0,23.6,0z" />
                  </svg>
                  <div #heartsContainer></div>
              </button>

          </div>
      </div>
  </div>
</div> `,
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

   
    this.renderer.appendChild(this.heartsContainer.nativeElement, svg1);
    this.renderer.appendChild(this.heartsContainer.nativeElement, svg2);
    this.renderer.appendChild(this.heartsContainer.nativeElement, svg3);
    this.renderer.appendChild(this.heartsContainer.nativeElement, svg4);

    setTimeout(() => {
      this.renderer.removeChild(this.heartsContainer.nativeElement, svg1);
      this.renderer.removeChild(this.heartsContainer.nativeElement, svg2);
      this.renderer.removeChild(this.heartsContainer.nativeElement, svg3);
      this.renderer.removeChild(this.heartsContainer.nativeElement, svg4);
    }, 3000);
  }

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
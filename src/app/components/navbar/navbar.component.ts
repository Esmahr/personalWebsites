import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  template: `<nav class="navbar navbar-expand-lg pt-4 pb-4 ps-5 position-static">
  <div class="container-fluid">
      <a class="navbar-brand" href="#">Muhammed Raşit Eşdemir</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mb-2 mb-lg-0 position-absolute end-0 pe-5 ps-2 nav-button">
              <li class="nav-item me-4">
                  <a class="nav-link active" aria-current="page" href="#">Ana Sayfa</a>
              </li>
              <li class="nav-item me-4">
                  <a class="nav-link" href="#">Blog</a>
              </li>
              <li class="dropdown me-4">
                  <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                      aria-expanded="false">
                      Projeler
                  </a>

                  <ul class="dropdown-menu">
                      <li><a class="dropdown-item" href="#">Action</a></li>
                      <li><a class="dropdown-item" href="#">Another</a></li>
                      <li><a class="dropdown-item" href="#">Something</a></li>
                  </ul>
              </li>
              <li class="dropdown me-2">
                  <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                      aria-expanded="false">
                      Tema
                  </a>

                  <ul class="dropdown-menu">
                      <li><a class="dropdown-item" href="#">Light Tema</a></li>
                      <li><a class="dropdown-item" href="#">Dark Tema</a></li>
                  </ul>
              </li>
          </ul>
      </div>
  </div>
</nav> `,
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

}

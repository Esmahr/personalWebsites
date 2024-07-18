import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  template: `<div class="sidebar d-flex">
  <div class="d-flex flex-column flex-shrink-0 bg-body-tertiary sidebar-big">
      <a href="#"
          class="d-flex pt-3 mb-md-0 me-md-auto pb-5 link-body-emphasis text-decoration-none sidebar-title">
          <i class="bi bi-envelope-paper-heart mt-1"></i>
          <span class="fs-4">Sidebar</span>
      </a>
      <ul class="nav nav-pills flex-column mb-auto me-0">
          <li class="nav-item">
              <a routerLink="abouth" routerLinkActive="active" class="nav-link link-body-emphasis">
                  <span class="icon"><i class="bi bi-house"></i></span>
                  Kişisel Bilgiler
              </a>
          </li>
          <li>
              <a routerLink="theme" routerLinkActive="active" class="nav-link link-body-emphasis">
                  <i class="bi bi-speedometer2"></i>
                  Temalarım
              </a>
          </li>
          <li>
              <a routerLink="blog" routerLinkActive="active" class="nav-link link-body-emphasis">
                  <i class="bi bi-table"></i>
                  Blog Yazılarım
              </a>
          </li>
          <li>
              <a routerLink="project" routerLinkActive="active" class="nav-link link-body-emphasis">
                  <i class="bi bi-grid"></i>
                  Projelerim
              </a>
          </li>
          <li>
              <a routerLink="page" routerLinkActive="active" class="nav-link link-body-emphasis">
                  <i class="bi bi-person-circle"></i>
                  İçerik
              </a>
          </li>
      </ul>
  </div>

  <div class="d-flex flex-column flex-shrink-0 bg-body-tertiary sidebar-little" style="width: 3.2rem;">
      <a href="/" class="d-block p-3 link-body-emphasis text-decoration-none" data-bs-toggle="tooltip"
          data-bs-placement="right" data-bs-original-title="Icon-only">
          <svg class="bi pe-none" width="40" height="32">
              <use xlink:href="#bootstrap"></use>
          </svg>
          <span class="visually-hidden">Icon-only</span>
      </a>
      <ul class=" nav nav-pills nav-flush flex-column mb-auto text-center">
          <li class="nav-item">
              <a routerLink="abouth" routerLinkActive="active" class="nav-link py-3 border-bottom rounded-0" aria-current="page"
                  data-bs-toggle="tooltip" data-bs-placement="right" aria-label="Home"
                  data-bs-original-title="Home">
                  <i class="bi bi-house"width="24" height="24"></i>
              </a>
          </li>
          <li>
              <a routerLink="theme" routerLinkActive="active"  class="nav-link py-3 border-bottom rounded-0" data-bs-toggle="tooltip"
                  data-bs-placement="right" aria-label="Dashboard" data-bs-original-title="Dashboard">
                  <i class="bi bi-speedometer2"></i>
              </a>
          </li>
          <li>
              <a routerLink="blog" routerLinkActive="active" class="nav-link py-3 border-bottom rounded-0" data-bs-toggle="tooltip"
                  data-bs-placement="right" aria-label="Blog Yazılarım" data-bs-original-title="Blog Yazılarım">
                  <i class="bi bi-table"></i>
              </a>
          </li>
          <li>
              <a routerLink="project" routerLinkActive="active" class="nav-link py-3 border-bottom rounded-0" data-bs-toggle="tooltip"
                  data-bs-placement="right" aria-label="Projelerim" data-bs-original-title="Products">
                   <i class="bi bi-grid"></i>
              </a>
          </li>
          <li>
              <a href="#" class="nav-link py-3 border-bottom rounded-0" data-bs-toggle="tooltip"
                  data-bs-placement="right" aria-label="Customers" data-bs-original-title="Customers">
                  <i class="bi bi-person-circle"></i>
              </a>
          </li>
      </ul>
  </div>
</div>`,
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {

}

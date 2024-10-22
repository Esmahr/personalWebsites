import { Component } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  template: `<div class="sidebarMenu" [ngClass]="status ? 'darSideBar' : 'genisSideBar'">
  <div class="text-center" style="height: 4rem;transition: box-shadow .2s linear;
  box-shadow: 0 3px 3px #3042801a;">
      <div [ngClass]="status ? 'darSideBarAlt' : 'genisSideBarAlt'">
          <button (click)="clickEvent()"><img src="../../../assets/dashboard.png" alt=""></button>
      </div>
  </div>
  <div class="sideBarOrta mt-5">
      <ul class="nav nav-pills flex-column mb-auto">
          <li class="nav-item" routerLinkActive="active-link">
              <a href="#" class="nav-link" routerLink="abouth" routerLinkActive="active">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                      class="bi bi-house" viewBox="0 0 16 16">
                      <path
                          d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5z" />
                  </svg>
                  <span class="navitemtext"
                      [ngClass]="statusLink ? 'navLinkDar' : 'navLinkGenis animated fadeInRight'">Kişisel
                      Bilgilerim</span>
              </a>
          </li>
          <li class="nav-item" routerLinkActive="active-link">
              <a href="#" class="nav-link" routerLink="theme" routerLinkActive="active">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                      class="bi bi-droplet-half" viewBox="0 0 16 16">
                      <path fill-rule="evenodd"
                          d="M7.21.8C7.69.295 8 0 8 0q.164.544.371 1.038c.812 1.946 2.073 3.35 3.197 4.6C12.878 7.096 14 8.345 14 10a6 6 0 0 1-12 0C2 6.668 5.58 2.517 7.21.8m.413 1.021A31 31 0 0 0 5.794 3.99c-.726.95-1.436 2.008-1.96 3.07C3.304 8.133 3 9.138 3 10c0 0 2.5 1.5 5 .5s5-.5 5-.5c0-1.201-.796-2.157-2.181-3.7l-.03-.032C9.75 5.11 8.5 3.72 7.623 1.82z" />
                      <path fill-rule="evenodd"
                          d="M4.553 7.776c.82-1.641 1.717-2.753 2.093-3.13l.708.708c-.29.29-1.128 1.311-1.907 2.87z" />
                  </svg>
                  <span class="navitemtext"
                      [ngClass]="statusLink ? 'navLinkDar' : 'navLinkGenis animated fadeInRight'">Temalarım</span>
              </a>
          </li>
          <li class="nav-item" routerLinkActive="active-link">
              <a href="#" class="nav-link" routerLink="blog" routerLinkActive="active">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                      class="bi bi-grid-1x2" viewBox="0 0 16 16">
                      <path
                          d="M6 1H1v14h5zm9 0h-5v5h5zm0 9v5h-5v-5zM0 1a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1zm9 0a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1zm1 8a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1z" />
                  </svg>
                  <span class="navitemtext"
                      [ngClass]="statusLink ? 'navLinkDar' : 'navLinkGenis animated fadeInRight'">Blog
                      Yazılarım</span>
              </a>
          </li>
          <li class="nav-item" routerLinkActive="active-link">
              <a class="nav-link" routerLink="project" routerLinkActive="active">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                      class="bi bi-box-seam" viewBox="0 0 16 16">
                      <path
                          d="M8.186 1.113a.5.5 0 0 0-.372 0L1.846 3.5l2.404.961L10.404 2zm3.564 1.426L5.596 5 8 5.961 14.154 3.5zm3.25 1.7-6.5 2.6v7.922l6.5-2.6V4.24zM7.5 14.762V6.838L1 4.239v7.923zM7.443.184a1.5 1.5 0 0 1 1.114 0l7.129 2.852A.5.5 0 0 1 16 3.5v8.662a1 1 0 0 1-.629.928l-7.185 2.874a.5.5 0 0 1-.372 0L.63 13.09a1 1 0 0 1-.63-.928V3.5a.5.5 0 0 1 .314-.464z" />
                  </svg>
                  <span class="navitemtext"
                      [ngClass]="statusLink ? 'navLinkDar' : 'navLinkGenis animated fadeInRight'">Projelerim</span>
              </a>
          </li>
          <li class="nav-item" routerLinkActive="active-link">
              <a href="#" class="nav-link" routerLink="page" routerLinkActive="active">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                      class="bi bi-folder-plus" viewBox="0 0 16 16">
                      <path
                          d="m.5 3 .04.87a2 2 0 0 0-.342 1.311l.637 7A2 2 0 0 0 2.826 14H9v-1H2.826a1 1 0 0 1-.995-.91l-.637-7A1 1 0 0 1 2.19 4h11.62a1 1 0 0 1 .996 1.09L14.54 8h1.005l.256-2.819A2 2 0 0 0 13.81 3H9.828a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 6.172 1H2.5a2 2 0 0 0-2 2m5.672-1a1 1 0 0 1 .707.293L7.586 3H2.19q-.362.002-.683.12L1.5 2.98a1 1 0 0 1 1-.98z" />
                      <path
                          d="M13.5 9a.5.5 0 0 1 .5.5V11h1.5a.5.5 0 1 1 0 1H14v1.5a.5.5 0 1 1-1 0V12h-1.5a.5.5 0 0 1 0-1H13V9.5a.5.5 0 0 1 .5-.5" />
                  </svg>
                  <span class="navitemtext"
                      [ngClass]="statusLink ? 'navLinkDar' : 'navLinkGenis animated fadeInRight'">Okumalarım</span>
              </a>
          </li>
      </ul>
  </div>
</div>`,
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent {
  name = "Angular Toggle Show Hide";
  showMyContainer: boolean = true;

  status: boolean = true;
  statusLink: boolean = true;
  clickEvent() {
    this.status = !this.status;

    if (this.statusLink) {
      setTimeout(() => {
        this.statusLink = false;
      }, 230);
    } else {
      this.statusLink = true;
    }
  }
}

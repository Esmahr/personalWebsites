import { Component } from '@angular/core';
import { UserService } from 'src/app/services/User/user.service';

@Component({
  selector: 'app-nav',
  template: `<nav class="navbar p-0">
  <div style="width: 100%;">
    <ul class="d-flex mb-1 mt-1">
      <div class="ms-3">
        <li class="nav-item p-0 me-auto" style="font-size: 18px;">
          <span class="nav-link" aria-current="page">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
              fill="currentColor" class="bi bi-calendar-event mb-1 me-2" viewBox="0 0 16 16">
              <path d="M11 6.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5z" />
              <path
                d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z" />
            </svg>{{ formattedDate}}</span>
        </li>
      </div>
      <div class="right d-flex me-3">
        <li class="nav-item p-0 d-flex">
          <div class="d-flex bg-danger-subtle" style="border-radius: 9px;">
            <a class="nav-link" href="#">Çıkış Yap</a>
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-box-arrow-in-right mt-2"
              viewBox="0 0 16 16">
              <path fill-rule="evenodd"
                d="M6 3.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-1 0v2A1.5 1.5 0 0 0 6.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-8A1.5 1.5 0 0 0 5 3.5v2a.5.5 0 0 0 1 0z" />
              <path fill-rule="evenodd"
                d="M11.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H1.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708z" />
            </svg>
          </div>
        </li>
      </div>
    </ul>
  </div>
</nav>`,
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {
  formattedDate: string | undefined;
  imageUrl: any = null;
  userInfo: any = {};
  selectedFile: any;
  constructor(private userService:
    UserService) {
    this.formattedDate = this.getFormattedDate();
  }

  getFormattedDate(): string {
    const months = ["Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran", "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık"];
    const now = new Date();
    const day = now.getDate();
    const monthIndex = now.getMonth();
    const year = now.getFullYear();

    return `${day} ${months[monthIndex]} ${year}`;
  }
  ngOnInit() {
    this.getUserInfo();
  }

  getUserInfo() {
    const token = localStorage.getItem('token');
    if (token) {
      this.userService.getUserInfo(token).subscribe({
        next: (response) => {
          this.userInfo = response.data;
          if (this.userInfo.profilePhotoLink) {
            this.imageUrl = this.userInfo.profilePhotoLink;
          }
        },
        error: (error) => {
          console.error('Error fetching user info', error);
        }
      });
    }
  }
}

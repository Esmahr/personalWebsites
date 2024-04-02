import { Component } from '@angular/core';
import { UserService } from 'src/app/services/User/user.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
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
          console.log('User info:', response);
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

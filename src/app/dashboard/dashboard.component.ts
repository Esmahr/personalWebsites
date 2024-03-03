import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/User/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  userInfo: any;
  profilePhotoLink: string = '';
  formattedDate: string;

  constructor(private userService: UserService) {
    this.formattedDate = this.getFormattedDate();
  }

  ngOnInit() {
    this.getUserInfo();
  }

  getUserInfo() {
    const token = localStorage.getItem('token'); // Token'ı yerel depolamadan alın
    if (token) {
      this.userService.getUserInfo(token).subscribe(
        data => {
          this.userInfo = data; // Kullanıcı bilgilerini saklayın
          this.userService.setCurrentUser(this.userInfo);
          this.profilePhotoLink = data.data.profilePhotoLink; // Profil fotoğrafı linkini sakla
          console.log(this.userInfo)
        },
        error => {
          console.error('Error fetching user info:', error);
        }
      );
    }
  }

  getFormattedDate(): string {
    const months = ["Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran", "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık"];
    const now = new Date();
    const day = now.getDate();
    const monthIndex = now.getMonth();
    const year = now.getFullYear();

    return `${day} ${months[monthIndex]} ${year}`;
  }
}

import { Component, ElementRef, ViewChild } from '@angular/core';
import { UserService } from '../services/User/user.service';

@Component({
  selector: 'app-abouth-edit',
  templateUrl: './abouth-edit.component.html',
  styleUrls: ['./abouth-edit.component.scss']
})
export class AbouthEditComponent {
  @ViewChild('editor', { static: true }) editorElement!: ElementRef;
  imageUrl: any = null;
  userInfo: any = {};
  selectedFile: any;

  constructor(private userService: UserService) { }

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

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.userInfo.profilePhoto = reader.result;
        this.imageUrl = reader.result;
      };
      reader.onerror = error => {
        console.error('Error converting image to Base64', error);
      };
    }
  }
  
  onSubmit() {
    const token = localStorage.getItem('token');
    if (token) {
      const formData = new FormData();
      formData.append('firstName', this.userInfo.firstName);
      formData.append('lastName', this.userInfo.lastName);
      formData.append('email', this.userInfo.email);
      formData.append('experience', this.userInfo.experience);
      formData.append('gender', this.userInfo.gender);
      formData.append('githubUsername', this.userInfo.githubUsername);
      formData.append('mediumUsername', this.userInfo.mediumUsername);
      formData.append('youtubeUsername', this.userInfo.youtubeUsername);
      
      // Profil fotoğrafını dosya olarak ekleyin, eğer varsa
      if (this.selectedFile) {
        formData.append('profilePhoto', this.selectedFile, this.selectedFile.name);
      }
  
      this.userService.updateUser(token, formData).subscribe({
        next: (response) => {
          console.log('User updated successfully', response);
        },
        error: (error) => {
          console.error('Error updating user', error);
        }
      });
    }
  }
  
}

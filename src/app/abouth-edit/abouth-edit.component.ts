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
  saveUserInfo() {
    const token = localStorage.getItem('token');
    if (token) {
      const formData = new FormData();
      formData.append('file', this.selectedFile); // Append the file
      formData.append('userUpdateRequest', JSON.stringify(this.userInfo)); // Append the user info as a JSON string
  
      this.userService.updateUser(token, formData).subscribe({
        next: (response) => {
          console.log('User updated successfully:', response);
        },
        error: (error) => {
          console.error('Error updating user', error);
        }
      });
    }
  }
}

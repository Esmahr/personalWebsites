import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService, LoginResponse } from '../services/Auth/auth.service';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent {
  username: string | undefined;
  password: string | undefined;
  rememberMe: boolean = false;
  hide = true;

  constructor(private authService: AuthService, private router: Router) { this.loadRememberedUser();}

  login() {
    if (this.rememberMe && this.username) {
      localStorage.setItem('rememberedUsername', this.username);
    } else {
      localStorage.removeItem('rememberedUsername');
    }
  
    if(this.password && this.username){
      this.authService.login(this.username, this.password).subscribe((response: LoginResponse) => {
        if (response.success && response.data.token) {
          localStorage.setItem('token', response.data.token);
          this.router.navigate(['/dashboard']);
        } else {
          console.error('Login failed: No token received');
        }
      }, error => {
        console.error('Login failed:', error);
      });
    }
  }
  

  logout() {
    // Çıkış işlemleri ...
    localStorage.removeItem('rememberedUsername');
    localStorage.removeItem('token');
    // Kullanıcıyı giriş sayfasına yönlendirme...
  }

  loadRememberedUser() {
    const rememberedUsername = localStorage.getItem('rememberedUsername');
    if (rememberedUsername) {
      this.username = rememberedUsername;
      this.rememberMe = true;
    }
  }
}

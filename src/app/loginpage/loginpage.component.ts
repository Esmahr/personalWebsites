import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService, LoginResponse } from '../services/Auth/auth.service';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-loginpage',
  template: `<main>
  <mat-grid-list cols="3" rowHeight="500px">
    <mat-grid-tile></mat-grid-tile>
    <mat-grid-tile>
      <form class="p-5 d-block border rounded-3 bg-body-tertiary mt-5" (ngSubmit)="login()">
        <div><mat-form-field class="example-full-width">
            <mat-label for="username">Kullanıcı Adı</mat-label>
            <input matInput type="text" class="form-control" id="username" name="username" placeholder="username"
              [(ngModel)]="username" required>
          </mat-form-field></div>

        <div> <mat-form-field>
            <mat-label>Enter your password</mat-label>
            <input matInput [type]="hide ? 'password' : 'text'" id="password" name="password" [(ngModel)]="password"
              required>
            <button mat-icon-button matSuffix (click)="hide = !hide" required type="button"
              [attr.aria-label]="'Hide password'" [attr.aria-pressed]="hide">
              <mat-icon>{{hide ? 'visibility_off' : 'visibility'}}</mat-icon>
            </button>
          </mat-form-field></div>

        <mat-checkbox class="example-margin" type="checkbox" value="remember-me" name="rememberMe"
          [(ngModel)]="rememberMe">Giriş bilgilerimi Hatırla</mat-checkbox>
        <hr>
        <button class="w-100 btn btn-lg btn-primary" type="submit">Giriş Yap</button>
      </form>
    </mat-grid-tile>
    <mat-grid-tile></mat-grid-tile>
  </mat-grid-list>
</main>`,
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
    localStorage.removeItem('rememberedUsername');
    localStorage.removeItem('token');
  }

  loadRememberedUser() {
    const rememberedUsername = localStorage.getItem('rememberedUsername');
    if (rememberedUsername) {
      this.username = rememberedUsername;
      this.rememberMe = true;
    }
  }
}

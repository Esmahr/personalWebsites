import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
export interface LoginResponse {
  success: boolean;
  message: string;
  data: {
    token: string;
  };
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loginUrl = 'http://87.248.157.49:9091/api/v3/auths/login';

  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<LoginResponse> {
    const loginData = { username, password };
    return this.http.post<LoginResponse>(this.loginUrl, loginData);
  }
}
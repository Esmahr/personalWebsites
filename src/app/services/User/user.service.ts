// user.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private usersUrl = 'http://87.248.157.49:9091/api/v3/users'; 
  constructor(private http: HttpClient) { }

  getUserInfo(token: string): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      })
    };
    return this.http.get(this.usersUrl, httpOptions);
  }

  updateUser(token: string, userUpdateRequest: any) {
    const headers = { 'Authorization': `Bearer ${token}`,
    'Content-Type': 'application/json' };
    return this.http.put(this.usersUrl, userUpdateRequest, { headers });
  }

}

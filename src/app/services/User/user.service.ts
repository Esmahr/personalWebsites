// user.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private usersUrl = 'http://87.248.157.49:9091/api/v3/users'; // API endpoint
  private currentUserSubject = new BehaviorSubject<any>(null); // Başlangıç değeri olarak null atanmış bir BehaviorSubject

  constructor(private http: HttpClient) { }

  getUserInfo(token: string): Observable<any> {
    // HTTP headers oluşturun
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      })
    };
    return this.http.get(this.usersUrl, httpOptions);
  }

  setCurrentUser(userInfo: any): void {
    this.currentUserSubject.next(userInfo); // Kullanıcı bilgisini güncelle
  }

  getCurrentUser(): Observable<any> {
    return this.currentUserSubject.asObservable(); // Mevcut kullanıcı bilgisini bir Observable olarak döndür
  }
}

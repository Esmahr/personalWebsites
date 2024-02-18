import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DescriptionService {

  constructor(private http: HttpClient) { }

  postData(data: any): void {
    this.http.post<any>('http://localhost:9091/api/v3/content', data)
      .subscribe(
        response => {
          console.log('POST request successful: ', response);
        },
        error => {
          console.error('Error occurred while making POST request: ', error);
        }
      );
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isLogin = true;
  isAdmin = true;
  isAuthenticated: Observable<any>;

  constructor(public http: HttpClient) {
    this.isAuthenticated = this.http.get(
      'https://jsonplaceholder.typicode.com/users/1'
    );
  }

  getUser() {
    return this.http.get('https://jsonplaceholder.typicode.com/users/1');
  }
}

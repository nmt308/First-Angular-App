import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isLogin = true;
  isAdmin = true;
  constructor() {}
  getToken() {
    return 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9';
  }
}

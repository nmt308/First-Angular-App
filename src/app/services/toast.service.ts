import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  message = '';
  isShow = false;

  constructor(public authService: AuthService) {}

  setMessage(value: string) {
    this.message = value;
  }

  toggleShow() {
    this.isShow = !this.isShow;
  }

  testCallAuthService() {
    //Call getUser to testing
    this.authService.getUser().subscribe((data) => {});
  }
}

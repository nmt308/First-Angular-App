import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  isShow = false;
  message = '';
  constructor() {}
  setMessage(value: string) {
    this.message = value;
  }
  toggleShow() {
    this.isShow = !this.isShow;
  }
  logToast() {
    alert('This is toast service');
  }
}

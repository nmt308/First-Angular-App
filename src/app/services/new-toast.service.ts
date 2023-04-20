import { Injectable } from '@angular/core';
import { ToastService } from './toast.service';

@Injectable({
  providedIn: 'root',
})
export class NewToastService extends ToastService {
  override logToast() {
    alert('This is new toast service');
  }
}

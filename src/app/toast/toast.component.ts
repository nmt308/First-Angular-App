import { Component, Input, SimpleChange } from '@angular/core';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss'],
})
export class ToastComponent {
  closeIcon = faXmark;
  @Input() messageToast = '';
  handleHide() {
    this.messageToast = '';
  }
}

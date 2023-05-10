import { Component } from '@angular/core';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { ToastService } from 'src/app/services/toast.service';
import {
  trigger,
  state,
  style,
  transition,
  animate,
  query,
  stagger,
  group,
} from '@angular/animations';
@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss'],

  animations: [
    trigger('onOff', [
      transition('void => *, :enter', [
        style({
          opacity: 0,
          transform: 'translateX(100%)',
        }),
        animate(400),
      ]),
      transition('* => void, :leave', [
        animate(
          400,
          style({
            transform: 'translateX(100%)',
          })
        ),
      ]),
    ]),
  ],
})
export class ToastComponent {
  closeIcon = faXmark;
  constructor(public toast: ToastService) {}
}

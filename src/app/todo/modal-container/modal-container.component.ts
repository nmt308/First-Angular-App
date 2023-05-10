import { Component } from '@angular/core';
import { TodoService } from 'src/app/services/todo.service';
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
  selector: 'app-modal-container',
  templateUrl: './modal-container.component.html',
  styleUrls: ['./modal-container.component.scss'],
  animations: [
    // trigger('openClose', [
    //   transition(':enter', [
    //     animate(
    //       '1s ease',
    //       style({
    //         opacity: 1,
    //         transform: 'translateX(0)',
    //       })
    //     ),
    //   ]),
    //   transition(':leave', [
    //     animate(
    //       '1s ease',
    //       style({
    //         opacity: 0,
    //         transform: 'translateX(100px)',
    //       })
    //     ),
    //   ]),
    // ]),
  ],
})
export class ModalContainerComponent {
  constructor(private todo: TodoService) {}
}

import { Component, EventEmitter, Output } from '@angular/core';
import { ToastService } from 'src/app/services/toast.service';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss'],
})
export class AddComponent {
  name = '';

  constructor(public toast: ToastService, public todo: TodoService) {}

  onAdd() {
    if (this.name.trim() === '') {
      this.toast.setMessage('Please fill the input !');
      this.toast.toggleShow();
      return;
    }
    this.todo.addTodo({ id: Date.now(), name: this.name });
    this.name = '';
  }
}

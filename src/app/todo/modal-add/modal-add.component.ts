import { Component, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TodoService } from 'src/app/services/todo.service';
@Component({
  selector: 'app-modal-add',
  templateUrl: './modal-add.component.html',
  styleUrls: ['./modal-add.component.scss'],
})
export class ModalAddComponent {
  @Input() title = '';
  form = new FormGroup({
    name: new FormControl('', [Validators.required]),
    detail: new FormControl('', [Validators.required]),
    status: new FormControl('', [Validators.required]),
  });

  constructor(public todo: TodoService) {}

  handleAdd() {
    this.todo.addTodo({
      id: Date.now(),
      name: this.form.controls.name.value as string,
    });
  }
}

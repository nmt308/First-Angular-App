import { Component, Input } from '@angular/core';
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
import { faTrash, faPen, faCheck } from '@fortawesome/free-solid-svg-icons';
import { TodoService } from 'src/app/services/todo.service';
@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss'],
  animations: [],
})
export class TodoItemComponent {
  removeIcon = faTrash;
  editIcon = faPen;
  checkIcon = faCheck;
  onEdit = false;
  @Input() id = 0;
  @Input() name = '';
  @Input() status = '';
  @Input() detail = '';

  ngDoCheck() {}

  handleEdit() {
    this.todo
      .editTodo({
        id: this.id,
        name: this.name,
        status: this.status,
        detail: this.detail,
      })
      .subscribe();
    this.onEdit = !this.onEdit;
  }

  handleRemove() {
    this.todo.removeTodo(this.id).subscribe((data) => {
      const newList = this.todo.listTodo.filter((todo) => todo.id !== this.id);
      this.todo.listTodo = newList;
    });
  }

  constructor(public todo: TodoService) {}
}

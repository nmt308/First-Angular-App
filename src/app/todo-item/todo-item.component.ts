import { Component, EventEmitter, Input, Output } from '@angular/core';
import { faTrash, faPen, faCheck } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss'],
})
export class TodoItemComponent {
  removeIcon = faTrash;
  editIcon = faPen;
  checkIcon = faCheck;
  onEdit = false;
  @Input() id = 0;
  @Input() name = '';
  @Output() todoRemove = new EventEmitter();
  @Output() todoSubmit = new EventEmitter();

  handleSave() {
    this.todoSubmit.emit({ id: this.id, name: this.name });
    this.onEdit = !this.onEdit;
  }
  handleChange(e: string) {}
}
